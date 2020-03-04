import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromFile from '../../file-picker/state';
import * as fromCalendar from '../../calendar/state';
import { Observable } from 'rxjs';
import { DriveFile } from '../../../models/drive-file';
import { CalendarEntry } from '../../../models/calendar-entry';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  activeFile$: Observable<DriveFile>;
  activeCalendar$: Observable<CalendarEntry>;
  constructor(private store: Store<fromFile.State>) { }

  ngOnInit() {
    this.activeFile$  = this.store.pipe(select(fromFile.getCurrentFile));
    this.activeCalendar$ = this.store.pipe(select(fromCalendar.getCurrentCalendar));
  }

}
