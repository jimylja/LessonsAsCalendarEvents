import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ExportStatus } from '../models/calendar';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarRef } from '@angular/material';
import { SnackbarMessageComponent } from '../shared/components/snack-message/snackbar-message.component';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private snackBar: MatSnackBar) {}
  message$ = new Subject<ExportStatus>();
  messageDuration: number;
  snackBarRef: MatSnackBarRef<SnackbarMessageComponent>;

  showMessage(message: Subject<ExportStatus>, duration= 0) {
    this.message$ = message;
    this.messageDuration = duration;
    this.displaySnackBar(duration);
  }

  getMessage(): Observable<ExportStatus> {
    return this.message$.asObservable().pipe(
      finalize(() => this.closeMessage())
    );
  }

  private displaySnackBar(duration: number, panelClass = 'popup-success'): void {
    const config = new MatSnackBarConfig();
    config.panelClass = [panelClass];
    config.duration = duration;
    config.verticalPosition = 'bottom';
    config.data = this.getMessage();
    this.snackBarRef = this.snackBar.openFromComponent(SnackbarMessageComponent, config);
  }

  private closeMessage(): void {
    if (this.messageDuration === 0) {
      setTimeout(() => {
        this.snackBarRef.dismiss();
      }, 3000);
    }
  }


}
