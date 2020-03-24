import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSettingsComponent } from './user-settings.component';
import { LessonEndPipe} from '../lesson-end.pipe';
import { UserFacade} from '../user.facade';
import { StoreModule} from '@ngrx/store';
import { FormBuilder } from '@angular/forms';
import { NO_ERRORS_SCHEMA} from '@angular/core';

describe('UserSettingsComponent', () => {
  let component: UserSettingsComponent;
  let fixture: ComponentFixture<UserSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSettingsComponent, LessonEndPipe ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [StoreModule.forRoot({})],
      providers: [UserFacade, FormBuilder]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
