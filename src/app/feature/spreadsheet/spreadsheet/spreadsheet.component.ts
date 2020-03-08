import { Component, OnInit } from '@angular/core';
import { SpreadsheetService } from '../spreadsheet.service';
import { Observable } from 'rxjs';
import { DriveFile } from '../../../models/drive-file';
import { CalendarEntry, ExportStatus } from '../../../models/calendar';
import { mergeMap, switchMap } from 'rxjs/operators';
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
  spreadSheetData$: Observable<Sheet[]>;
  activeCalendar: CalendarEntry;
  exportStatus$: Observable<ExportStatus> = null;
  constructor(
    private store: Store<fromFile.State>,
    private spreadsheetService: SpreadsheetService,
    private calendarService: CalendarApiService) { }
  ngOnInit() {
    this.activeFile$  = this.store.pipe(select(fromFile.getCurrentFile));
    this.activeCalendar$ = this.store.pipe(select(fromCalendar.getCurrentCalendar));

    this.spreadSheetData$ = this.activeCalendar$.pipe(
      mergeMap((calendar: CalendarEntry) => {
        this.activeCalendar = calendar;
        return this.activeFile$.pipe(
          switchMap((file: DriveFile) => {
            return this.spreadsheetService.getSpreadsheetData(file.id);
          })
        );
      })
    );
  }

  exportToCalendar(spreadSheetData: Sheet[]) {
    this.calendarService.exportLessonsToCalendar(spreadSheetData, this.activeCalendar);
  }

}
