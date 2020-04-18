import { TestBed, inject, async } from '@angular/core/testing';
import { EventsExportGuard } from './events-export.guard';
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
import * as fromActiveItems from '../active-items/state';

describe('EventsExportGuard', () => {
  let store: MockStore<AppState>;
  let mockActiveItemsSelector: MemoizedSelector<fromActiveItems.State, any>;
  const routeMock: any = { snapshot: {}, };
  const routeStateMock: any = { snapshot: {}, url: '/calendar'};
  const initialState = appInitialState;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({initialState}),
        EventsExportGuard,
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
    mockActiveItemsSelector = store.overrideSelector(fromActiveItems.getActiveItems, {activeCalendar: null, activeFile: null});
  });

  it('should ...', inject([EventsExportGuard], (guard: EventsExportGuard) => {
    expect(guard).toBeTruthy();
  }));

  it('should redirect an unauthenticated user to the shell', async(
    inject([Router, EventsExportGuard], (router: Router, guard: EventsExportGuard) => {
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
