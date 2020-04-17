import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SpreadsheetService } from '../spreadsheet.service';
import { Observable } from 'rxjs';
import { CalendarEntry } from '../../../models/calendar';
import { mergeMap, switchMap } from 'rxjs/operators';
import { Sheet } from '../../../models/sheet';
import { CalendarApiService } from '../../active-items/calendar-api.service';
import { FileState } from '../../active-items/state/active-items.reducer';
import { ActiveItemsFacade } from '../../active-items/active-items.facade';

@Component({
  selector: 'app-spreadsheet',
  templateUrl: './spreadsheet.component.html',
  styleUrls: ['./spreadsheet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpreadsheetComponent implements OnInit {

  activeFile$: Observable<FileState>;
  activeCalendar$: Observable<CalendarEntry>;
  spreadSheetData$: Observable<Sheet[]>;
  colorsPalette$: Observable<string[]>;
  activeCalendar: CalendarEntry;
  isExportInProcess = false;
  form: FormGroup;
  classesData: FormArray;

  constructor(
    private fb: FormBuilder,
    private activeItemsFacade: ActiveItemsFacade,
    private spreadsheetService: SpreadsheetService,
    private calendarService: CalendarApiService,
    private cd: ChangeDetectorRef
    ) {
      this.form = this.fb.group({
        classesData: this.fb.array([]),
      });
  }
  ngOnInit() {
    this.classesData = this.getClassesDataControls();
    this.activeFile$ = this.activeItemsFacade.getActiveItem('file') as Observable<FileState>;
    this.activeCalendar$ = this.activeItemsFacade.getActiveItem('calendar') as Observable<CalendarEntry>;
    this.colorsPalette$ = this.calendarService.getCalendarColors();

    this.spreadSheetData$ = this.activeCalendar$.pipe(
      mergeMap((calendar: CalendarEntry) => {
        this.activeCalendar = calendar;
        return this.activeFile$.pipe(
          switchMap((file: FileState) => this.spreadsheetService.getSpreadsheetData(file.id))
        );
      })
    );
  }

  exportToCalendar(): void {
    this.isExportInProcess = true;
    this.calendarService.exportLessonsToCalendar(this.form.value.classesData, this.activeCalendar)
      .subscribe({complete: () => {
        this.isExportInProcess = false;
        this.cd.markForCheck();
      }}
    );
  }

  addClassToForm({lessons, title, colorId}: Sheet): void {
    this.classesData.push(this.fb.group({
      lessons: [lessons],
      colorId,
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
