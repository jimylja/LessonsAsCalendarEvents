import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as fromFile from '../../file-picker/state';
import * as fromCalendar from '../../calendar/state';
import {combineLatest, Observable} from 'rxjs';
import {DriveFile} from '../../../models/drive-file';
import {CalendarEntry} from '../../../models/calendar';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
  activeFile$: Observable<DriveFile>;
  activeCalendar$: Observable<CalendarEntry>;
  isSpreadsheetEnabled$: Observable<boolean>;
  constructor(private store: Store<fromFile.State>) { }

  ngOnInit() {
    this.activeFile$  = this.store.pipe(select(fromFile.getCurrentFile));
    this.activeCalendar$ = this.store.pipe(select(fromCalendar.getCurrentCalendar));
    this.isSpreadsheetEnabled$ = combineLatest(this.activeCalendar$, this.activeFile$).pipe(
      map(data => (data.some(isItemsDefined)))
    );
    const isItemsDefined = item => (item === undefined) ? true :
      (item.hasOwnProperty('id')) ? item.id === null : true;
  }
}
