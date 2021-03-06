import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ExportStatus } from '../models/calendar';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarRef } from '@angular/material/snack-bar';
import { SnackbarMessageComponent } from '../shared/components/snack-message/snackbar-message.component';
import { Router } from '@angular/router';
import { SnackMessage } from '../models/snack-message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private router: Router,
    private readonly zone: NgZone,
    private snackBar: MatSnackBar) {}
  snackBarRef: MatSnackBarRef<SnackbarMessageComponent>;
  redirectTo: string;
  messageConfig: MatSnackBarConfig = new MatSnackBarConfig<any>();

  showMessage({redirectTo, ...config}: SnackMessage) {
    this.initializePopupMessage();
    this.messageConfig = {...this.messageConfig, ...config};
    this.redirectTo = redirectTo;
    this.displaySnackBar();
  }

  /**
   * Method returns message string or status of export process
   * @returns - message data
   */
  getMessage(): Observable<ExportStatus|string> {
    return this.messageConfig.data.message.asObservable().pipe(
      finalize(() => this.closeMessage())
    );
  }

  /**
   * Method opens snackbar with message, if set redirect router navigate to it
   */
  private displaySnackBar(): void {
    const config = { ...(new MatSnackBarConfig()), ...this.messageConfig};
    config.data.message = this.getMessage();
    this.zone.run(() => {
      this.snackBarRef = this.snackBar.openFromComponent(SnackbarMessageComponent, config);
      if (this.redirectTo) {
        this.snackBarRef.afterDismissed().subscribe(() => {
          this.router.navigate([this.redirectTo]);
        });
      }
    });
  }

  /**
   * Method dismisses message, which is without duration
   */
  private closeMessage(): void {
    if (this.messageConfig.duration === 0) {
      setTimeout(() => {
        this.snackBarRef.dismiss();
      }, 3000);
    }
  }

  /**
   * Generates new snackBar with basic parameters
   */
  private initializePopupMessage(): void {
    this.messageConfig = new MatSnackBarConfig<any>();
    this.messageConfig.duration = 3000;
    this.messageConfig.panelClass = ['popup-success'];
  }
}
