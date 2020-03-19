import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SpreadsheetService } from '../spreadsheet.service';
import { Observable } from 'rxjs';
import { DriveFile } from '../../../models/drive-file';
import { CalendarEntry } from '../../../models/calendar';
import { mergeMap, switchMap } from 'rxjs/operators';
import { Sheet } from '../../../models/sheet';
import { select, Store } from '@ngrx/store';
import * as fromFile from '../../file-picker/state';
import * as fromCalendar from '../../calendar/state';
import {CalendarApiService} from '../../calendar/calendar-api.service';

@Component({
  selector: 'app-spreadsheet',
  templateUrl: './spreadsheet.component.html',
  styleUrls: ['./spreadsheet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpreadsheetComponent implements OnInit {

  activeFile$: Observable<DriveFile>;
  activeCalendar$: Observable<CalendarEntry>;
  spreadSheetData$: Observable<Sheet[]>;
  activeCalendar: CalendarEntry;
  form: FormGroup;
  classesData: FormArray;

  constructor(
    private fb: FormBuilder,
    private store: Store<fromFile.State>,
    private spreadsheetService: SpreadsheetService,
    private calendarService: CalendarApiService) {
      this.form = this.fb.group({
        classesData: this.fb.array([]),
      });
  }
  ngOnInit() {
    this.classesData = this.getClassesDataControls();
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

  exportToCalendar(): void {
    this.calendarService.exportLessonsToCalendar(this.form.value.classesData, this.activeCalendar);
  }

  addClassToForm({lessons, title}: Sheet): void {
    this.classesData.push(this.fb.group({
      lessons: [lessons],
      title
    }));
  }

  changeAttendersForClass(isAttendersAllowed: boolean, tabIndex: number, sheetData: Sheet): void {
    const classData = (this.classesData.controls[tabIndex] as FormGroup);
    if (isAttendersAllowed) {
      const att = new FormControl(sheetData.attendeesEmail, Validators.email);
      classData.addControl('attendeesEmail', att);
    } else {
      classData.removeControl('attendeesEmail');
    }
  }

  private getClassesDataControls(): FormArray {
    return this.form.controls.classesData as FormArray;
  }
}
