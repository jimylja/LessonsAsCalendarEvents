import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse
} from '@angular/common/http';
import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';
import { SnackMessage, MessageService } from './message.service';

@Injectable()
export class ErrorInterceptor implements ErrorHandler, HttpInterceptor {
  constructor(private inj: Injector, private readonly zone: NgZone) {
    this.zone.run(() => {
      setTimeout(() => {
        this.messageService = this.inj.get(MessageService);
      }, 0);
    });
  }

  snackMessage: SnackMessage;
  messageService: MessageService;
  messageText = new BehaviorSubject(null);

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let redirectTo = '';
        console.log('Http Error Handler', error);
        const message = (error.error.hasOwnProperty('error')) ? error.error.error.message : error.error;
        let errorMessage = `Неможливо виконати: Помилка: ${message}. Код:${error.status}`;
        if (message === 'Bad Request') {
          errorMessage = 'Некоректний запит на сервер';
        } else if (message === 'Invalid Credentials' || error.status === 401) {
          errorMessage = 'Немає необхідних дозволів';
          redirectTo = 'login';
        }
        if (redirectTo.length !== 0) {
          this.displaySnackBar(errorMessage, redirectTo);
        } else {
          this.displaySnackBar(errorMessage);
        }
        return throwError(error);
      })
    );
  }

  handleError(err: ErrorEvent) {
    console.log('Global Error Handler', err);
    const isErrorFromHttp = ((err instanceof Error) && (err instanceof HttpErrorResponse));
    if (!isErrorFromHttp) {
      const startMessagePos = err.message.indexOf('Error');
      const endMessagePos = err.message.indexOf('Error', startMessagePos + 1);
      const message = err.message.slice(startMessagePos, endMessagePos);
      this.zone.run(
        () => {
          this.displaySnackBar(message === '' ? err.message : message);
        }
      );
    }
    return throwError(`Message: ${err.message}`);
  }

  private displaySnackBar(message: string, redirectTo?: string): void {
    this.snackMessage = { data: {message: this.messageText, type: 'errorMessage'}};
    this.snackMessage.panelClass = ['popup-error'];
    if (redirectTo) { this.snackMessage.redirectTo = redirectTo; }
    this.messageText.next(message);
    this.messageService.showMessage(this.snackMessage);
    this.messageText.complete();
  }
}
