import { Component, OnInit } from '@angular/core';
import { SpreadsheetService } from '../spreadsheet.service';
import { Observable } from 'rxjs';
import { DriveFile } from '../../../models/drive-file';
import { CalendarEntry } from '../../../models/calendar-entry';
import { switchMap } from 'rxjs/operators';
import { Sheet } from '../../../models/sheet';
import { select, Store } from '@ngrx/store';
import * as fromFile from '../../file-picker/state';
import * as fromCalendar from '../../calendar/state';

@Component({
  selector: 'app-spreadsheet',
  templateUrl: './spreadsheet.component.html',
  styleUrls: ['./spreadsheet.component.scss']
})
export class SpreadsheetComponent implements OnInit {

  activeFile$: Observable<DriveFile>;
  activeCalendar$: Observable<CalendarEntry>;
  spreadsheetData$: Observable<Sheet[]>;

  constructor(
    private store: Store<fromFile.State>,
    private spreadsheetService: SpreadsheetService) { }
    displayedColumns: string[] = ['number', 'date', 'order', 'location', 'topic', 'hwTheory', 'hwPractice'];
  ngOnInit() {
    this.activeFile$  = this.store.pipe(select(fromFile.getCurrentFile));
    this.activeCalendar$ = this.store.pipe(select(fromCalendar.getCurrentCalendar));

    this.spreadsheetData$ = this.activeFile$.pipe(
      switchMap( (file: DriveFile) => {
       return this.spreadsheetService.getSpreadsheetData(file.id);
      }
    ));
  }

}
