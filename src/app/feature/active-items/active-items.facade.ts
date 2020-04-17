import { Injectable } from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromActiveItems from './state';
import * as ActiveItemsActions from './state/active-items.actions';
import {ParseError} from './state/active-items.reducer';
import {DriveFile} from '../../models/drive-file';
import {CalendarEntry} from '../../models/calendar';
import {Observable} from 'rxjs';

@Injectable(
  {providedIn: 'root'}
)
export class ActiveItemsFacade {
  constructor(private store: Store<fromActiveItems.State>) {}
  activeItems = this.store.select(fromActiveItems.getActiveItems);
  selectItem(item: 'file'|'calendar', data: DriveFile|CalendarEntry): void {
    switch (item) {
      case 'file':
        this.store.dispatch(new ActiveItemsActions.FileSelected(data as DriveFile));
        break;
      case 'calendar':
        this.store.dispatch(new ActiveItemsActions.CalendarSelected(data as CalendarEntry));
        break;
    }
  }

  getActiveItem(item: 'file'|'calendar'): Observable<DriveFile|CalendarEntry> {
    switch (item) {
      case 'file':
        return this.store.select(fromActiveItems.getActiveFile);
      case 'calendar':
        return this.store.select(fromActiveItems.getActiveCalendar);
    }
  }

  fileValidationFailed(errorMessage: ParseError): void {
    this.store.dispatch(new ActiveItemsActions.ValidationFailed(errorMessage));
  }
}
