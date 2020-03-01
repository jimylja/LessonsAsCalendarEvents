import { Component, OnInit } from '@angular/core';
import { SpreadsheetService } from '../spreadsheet.service';
import { select, Store } from '@ngrx/store';
import * as fromFile from '../../file-picker/state';
import * as fromCalendar from '../../calendar/state';
import {combineLatest, Observable} from 'rxjs';
import {DriveFile} from '../../../models/drive-file';
import {CalendarEntry} from '../../../models/calendar-entry';
import {map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-spreadsheet',
  templateUrl: './spreadsheet.component.html',
  styleUrls: ['./spreadsheet.component.scss']
})
export class SpreadsheetComponent implements OnInit {

  activeFile$: Observable<DriveFile>;
  activeCalendar$: Observable<CalendarEntry>;
  activeComponents$: Observable<any>;

  constructor(
    private store: Store<fromFile.State>,
    private spreadsheetService: SpreadsheetService) { }

  ngOnInit() {
    this.activeFile$  = this.store.pipe(select(fromFile.getCurrentFile));
    this.activeCalendar$ = this.store.pipe(select(fromCalendar.getCurrentCalendar));

    // @ts-ignore
    this.activeComponents$ = this.activeFile$.pipe(
      switchMap( (file: DriveFile) => {
       return this.spreadsheetService.getSpreadsheet(file.id).pipe(
          map(
            data => console.log(data)
          )
        );
      }
    )).subscribe();
  }

}
