import { Injectable, Injector } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ExportStatus } from '../models/calendar';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarRef } from '@angular/material';
import { SnackbarMessageComponent } from '../shared/components/snack-message/snackbar-message.component';
import { Router } from '@angular/router';

export interface SnackMessage extends MatSnackBarConfig {
  data: {
    message: Subject<ExportStatus|string>;
    type: 'errorMessage' | 'exportMessage';
  };
  redirectTo?: string;
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private inj: Injector,
    private router: Router,
    private snackBar: MatSnackBar) {}
  snackBarRef: MatSnackBarRef<SnackbarMessageComponent>;
  redirectTo: string;
  messageConfig: MatSnackBarConfig = {panelClass: ['popup-success'], duration: 0};

  showMessage({redirectTo, ...config}: SnackMessage) {
    this.messageConfig = {...this.messageConfig, ...config};
    this.redirectTo = redirectTo;
    this.displaySnackBar();
  }

  getMessage(): Observable<ExportStatus|string> {
    return this.messageConfig.data.message.asObservable().pipe(
      finalize(() => this.closeMessage())
    );
  }

  private displaySnackBar(): void {
    const config = { ...(new MatSnackBarConfig()), ...this.messageConfig};
    config.data.message = this.getMessage();
    this.snackBarRef = this.snackBar.openFromComponent(SnackbarMessageComponent, config);
  }

  private closeMessage(): void {
    if (this.messageConfig.duration === 0) {
      setTimeout(() => {
        this.snackBarRef.dismiss();
        if (this.redirectTo) {
          this.router.navigate([this.redirectTo]);
        }
      }, 3000);
    }
  }
}
