import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule } from '@angular/material';
import { SpreadsheetComponent } from './spreadsheet.component';
import { Store, StoreModule} from '@ngrx/store';
import { MockStore, provideMockStore} from '@ngrx/store/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { UserFacade } from '../../user/user.facade';
import {AppStore} from '../../user/login/login.component.spec';
import {appInitialState} from '../../../state/app.state';

describe('SpreadsheetComponent', () => {
  let component: SpreadsheetComponent;
  let fixture: ComponentFixture<SpreadsheetComponent>;
  let store: MockStore<AppStore>;
  const initialState = appInitialState;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpreadsheetComponent ],
      providers: [provideMockStore({initialState}), FormBuilder, UserFacade],
      imports: [
        MatSnackBarModule,
        StoreModule.forRoot({}),
        HttpClientTestingModule,
        RouterTestingModule
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    fixture = TestBed.createComponent(SpreadsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
