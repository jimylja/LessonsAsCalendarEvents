import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse
} from '@angular/common/http';
import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements ErrorHandler, HttpInterceptor {
  constructor(
    private readonly zone: NgZone,
    private snackBar: MatSnackBar) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        const message = (error.error.hasOwnProperty('error')) ? error.error.error.message : error.error;
        let errorMessage = `Неможливо виконати: Помилка: ${message}. Код:${error.status}`;
        if (message === 'Bad Request') {
          errorMessage = 'Некоректний запит на сервер';
        } else if (message === 'Invalid Credentials') {
          errorMessage = 'Немає необхідних дозволів';
        }
        this.displaySnackBar(errorMessage);
        return throwError(error);
      })
    );
  }

  handleError(err: ErrorEvent) {
    console.log(err);
    if (err instanceof Error) {
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

  private displaySnackBar(message: string): void {
    const config = new MatSnackBarConfig();
    config.panelClass = ['popup-error'];
    config.duration = 3000;
    config.verticalPosition = 'bottom';
    this.snackBar.open(message, null, config);
  }
}
