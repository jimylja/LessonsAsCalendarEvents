import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse
} from '@angular/common/http';
import {ErrorHandler, Injectable, Injector, OnDestroy} from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';
import { MessageService } from './message.service';
import { SnackMessage } from '../models/snack-message';

@Injectable()
export class ErrorInterceptor implements ErrorHandler, HttpInterceptor, OnDestroy {
  constructor(private inj: Injector) {}
  redirectTo = '';
  snackMessage: SnackMessage;
  messageService: MessageService;
  messageText = new BehaviorSubject(null);

  static getErrorMessage(error): string {
    let message;
    if (error.error.hasOwnProperty('error')) {
      if (error.error.error.message) {
        message = error.error.error.message;
      } else { message = error.error.error; }
    } else { message = error.error; }
    if (!message) { message = 'Невідома помилка'; }
    let errorMessage = `Неможливо виконати: Помилка: ${message}. Код:${error.status}`;
    if (message === 'Bad Request') {
      errorMessage = 'Некоректний запит на сервер';
    } else if (message === 'Invalid Credentials' || message === 'invalid_grant' || error.status === 401) {
      if (sessionStorage.getItem('accessToken')) { return null; }
      errorMessage = 'Немає необхідних дозволів';
    }
    return errorMessage;
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        const errorMessage = ErrorInterceptor.getErrorMessage(error);
        if (errorMessage) { this.displaySnackBar(errorMessage); }
        return throwError(error);
      })
    );
  }

  handleError(err: ErrorEvent) {
    const isErrorFromHttp = (err instanceof HttpErrorResponse);
    if (!isErrorFromHttp) {
      console.log('Global Error Handler', err);
      if (err.message === 'Invalid Credentials') { this.redirectTo = 'user/login'; }
      const startMessagePos = err.message.indexOf('Error');
      const endMessagePos = err.message.indexOf('Error', startMessagePos + 1);
      const message = err.message.slice(startMessagePos, endMessagePos);
      this.displaySnackBar(message === '' ? err.message : message);
    }
    return throwError(`Message: ${err.message}`);
  }

  private displaySnackBar(message: string): void {
    this.messageService = this.inj.get(MessageService);
    this.snackMessage = {data: {message: this.messageText, title: 'Помилка'}};
    this.snackMessage.panelClass = ['popup-error'];
    if (this.redirectTo.length !== 0) { this.snackMessage.redirectTo = this.redirectTo; }
    this.messageText.next(message);
    this.messageService.showMessage(this.snackMessage);
  }

  ngOnDestroy(): void {
    this.messageText.complete();
  }
}
