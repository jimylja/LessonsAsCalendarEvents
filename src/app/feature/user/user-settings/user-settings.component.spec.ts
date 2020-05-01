import {async, ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';

import { UserSettingsComponent } from './user-settings.component';
import { LessonEndPipe} from '../lesson-end.pipe';
import { UserFacade} from '../user.facade';
import { FormBuilder } from '@angular/forms';
import { appInitialState, AppState} from '../../../state/app.state';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of} from 'rxjs';

describe('UserSettingsComponent', () => {
  let store: MockStore<AppState>;
  const initialState = appInitialState;
  let component: UserSettingsComponent;
  let fixture: ComponentFixture<UserSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSettingsComponent, LessonEndPipe ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [UserFacade, FormBuilder, provideMockStore({initialState})]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.inject(MockStore, null);
    fixture = TestBed.createComponent(UserSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', fakeAsync(() => {
    fixture = TestBed.createComponent(UserSettingsComponent);
    component = fixture.componentInstance;
    component.settings$ = of(initialState.user.settings);
  }));
});
