import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {UserFacade} from '../user.facade';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LessonsSettings} from '../../../models/lessonsSettings';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import * as moment from 'moment';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserSettingsComponent implements OnInit {
  settings$ = this.userFacade.settings$;

  constructor(private userFacade: UserFacade, private fb: FormBuilder) {}
  form$: Observable<FormGroup>;
  lessonsStartControls: FormArray;

  ngOnInit() {
    this.form$ = this.settings$.pipe(
      map((settings: LessonsSettings) => this.getSettingsForm(settings))
    );
  }

  onSubmit(settingsForm: FormGroup) {
    this.userFacade.saveSettings(settingsForm.value);
  }

  private getSettingsForm(settings: LessonsSettings): FormGroup {
    const form = this.fb.group({
      lessonDuration: this.fb.control(
        settings.lessonDuration,
        [Validators.required, Validators.min(25), Validators.max(180)]
      ),
      lessonsStartSchedule: this.fb.array(settings.lessonsStartSchedule.map(
        time => (new FormControl(time, {validators: Validators.required}))
      ))
    });
    this.lessonsStartControls = form.controls.lessonsStartSchedule as FormArray;
    return form;
  }

  addLesson(): void {
    const startOfLastLesson = this.lessonsStartControls.value.slice(-1)[0];
    const startOfNewLesson = moment(startOfLastLesson, 'HH:mm a').add(10, 'minutes').format('HH:mm');
    this.lessonsStartControls.push(new FormControl(startOfNewLesson, {validators: Validators.required}));
    this.lessonsStartControls.markAsDirty();
  }

  removeLesson(): void {
    this.lessonsStartControls.removeAt(this.lessonsStartControls.length - 1);
    this.lessonsStartControls.markAsDirty();
  }
}
