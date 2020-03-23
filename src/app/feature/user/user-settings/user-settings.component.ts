import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {UserFacade} from '../user.facade';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LessonsSettings} from '../../../models/lessonsSettings';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

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

  ngOnInit() {
    this.form$ = this.settings$.pipe(
      map((settings: LessonsSettings) => this.getSettingsForm(settings))
    );
  }

  onSubmit(f: FormGroup) {
    console.log(f.value);
  }

  private getSettingsForm(settings: LessonsSettings): FormGroup {
    return this.fb.group({
      lessonsDuration: this.fb.control(
        settings.lessonDuration,
        [Validators.required, Validators.min(25), Validators.max(180)]
      ),
      lessonsStart: this.fb.array(settings.lessonsStartSchedule.map(
        time => (new FormControl(time, {validators: Validators.required}))
      ))
    });
  }
}
