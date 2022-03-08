import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SpreadsheetComponent } from './spreadsheet.component';
import { StoreModule } from '@ngrx/store';
import { provideMockStore} from '@ngrx/store/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { appInitialState } from '../../../state/app.state';
import { UserFacade } from '../../user/user.facade';
import {GoogleAuthService} from 'ng-gapi';
import {mockAuthService} from '../../user/mock/gapi.mock';

describe('SpreadsheetComponent', () => {
  let component: SpreadsheetComponent;
  let fixture: ComponentFixture<SpreadsheetComponent>;
  const initialState = appInitialState;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SpreadsheetComponent ],
      providers: [
        {provide: GoogleAuthService, useValue: mockAuthService},
        provideMockStore({initialState}), FormBuilder, UserFacade
      ],
      imports: [
        MatSnackBarModule,
        StoreModule.forRoot({}),
        HttpClientTestingModule,
        RouterTestingModule
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents().then();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpreadsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
