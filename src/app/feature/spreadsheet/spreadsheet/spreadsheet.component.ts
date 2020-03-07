import { Component, OnInit } from '@angular/core';
import { SpreadsheetService } from '../spreadsheet.service';
import { Observable } from 'rxjs';
import { DriveFile } from '../../../models/drive-file';
import { CalendarEntry } from '../../../models/calendar-entry';
import {mergeMap, switchMap} from 'rxjs/operators';
import { Sheet } from '../../../models/sheet';
import { select, Store } from '@ngrx/store';
import * as fromFile from '../../file-picker/state';
import * as fromCalendar from '../../calendar/state';
import { CalendarApiService } from '../../calendar/calendar-api.service';

@Component({
  selector: 'app-spreadsheet',
  templateUrl: './spreadsheet.component.html',
  styleUrls: ['./spreadsheet.component.scss']
})
export class SpreadsheetComponent implements OnInit {

  activeFile$: Observable<DriveFile>;
  activeCalendar$: Observable<CalendarEntry>;
  spreadSheetData: Sheet[];
  activeCalendar: CalendarEntry;
  constructor(
    private store: Store<fromFile.State>,
    private spreadsheetService: SpreadsheetService,
    private calendarService: CalendarApiService) { }
    displayedColumns: string[] = ['number', 'date', 'order', 'location', 'topic', 'hwTheory', 'hwPractice'];
  ngOnInit() {
    this.activeFile$  = this.store.pipe(select(fromFile.getCurrentFile));
    this.activeCalendar$ = this.store.pipe(select(fromCalendar.getCurrentCalendar));

    this.activeCalendar$.pipe(
      mergeMap((calendar: CalendarEntry) => {
        this.activeCalendar = calendar;
        return this.activeFile$.pipe(
          switchMap((file: DriveFile) => {
            return this.spreadsheetService.getSpreadsheetData(file.id);
          })
        );
      })
    ).subscribe(lessons => this.spreadSheetData = lessons);
  }

  exportToCalendar() {
    this.calendarService.exportLessonsToCalendar(this.spreadSheetData, this.activeCalendar);
  }

}
