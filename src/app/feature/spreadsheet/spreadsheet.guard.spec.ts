import { TestBed, inject, async } from '@angular/core/testing';
import { SpreadsheetGuard } from './spreadsheet.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService} from '../user/auth.service';
import { GoogleAuthService} from 'ng-gapi';
import { Observable} from 'rxjs';
import { Store} from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import {appInitialState, AppState} from '../../state/app.state';
import { MemoizedSelector } from '@ngrx/store';
import * as fromFile from '../file-picker/state';
import * as fromCalendar from '../calendar/state';

describe('SpreadsheetGuard', () => {
  let store: MockStore<AppState>;
  let mockFileSelector: MemoizedSelector<fromFile.State, any>;
  let mockCalendarSelector: MemoizedSelector<fromCalendar.State, any>;
  const routeMock: any = { snapshot: {}, };
  const routeStateMock: any = { snapshot: {}, url: '/calendar'};
  const initialState = appInitialState;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({initialState}),
        SpreadsheetGuard,
        {provide: GoogleAuthService, useValue: {}},
        {provide: AuthService, useValue: {refreshToken: 'some token'}},
      ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
    store = TestBed.get(Store);
    mockFileSelector = store.overrideSelector(fromFile.getCurrentFile, null);
    mockCalendarSelector = store.overrideSelector(fromCalendar.getCurrentCalendar, null);
  });

  it('should ...', inject([SpreadsheetGuard], (guard: SpreadsheetGuard) => {
    expect(guard).toBeTruthy();
  }));

  it('should redirect an unauthenticated user to the shell', async(
    inject([Router, SpreadsheetGuard], (router: Router, guard: SpreadsheetGuard) => {
      store.refreshState();
      spyOn(router, 'navigate').and.stub();
      (guard.canActivate(routeMock, routeStateMock) as Observable<boolean>).subscribe(
        canActivate => {
          expect(canActivate).toEqual(false);
          expect(router.navigate).toHaveBeenCalledWith(['']);
        }
      );
    })
  ));

});
