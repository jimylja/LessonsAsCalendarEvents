import {TestBed, inject, async} from '@angular/core/testing';
import {AuthGuard} from './auth.guard';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {GoogleAuthService} from 'ng-gapi';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {Store} from '@ngrx/store';
import {appInitialState, AppState} from '../../state/app.state';
import {AuthService} from '../user/auth.service';
import {Router} from '@angular/router';

describe('AuthGuard', () => {
  let store: MockStore<AppState>;
  const mockService = {refreshToken: null};
  const routeMock: any = { snapshot: {}};
  const routeStateMock: any = { snapshot: {}, url: '/'};
  const initialState = appInitialState;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({initialState}),
        AuthGuard,
        {provide: AuthService, useValue: mockService},
        {provide: GoogleAuthService, useValue: {}},
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
      ],
    });
  });

  it('should create instance', inject([AuthGuard], (guard: AuthGuard) => {
    store = TestBed.get(Store);
    expect(guard).toBeTruthy();
  }));

  it('should redirect an unauthenticated user to the login route',
    inject([Router, AuthGuard], (router: Router, guard: AuthGuard) => {
      spyOn(router, 'navigate').and.stub();
      expect(guard.canActivate(routeMock, routeStateMock)).toEqual(false);
      expect(guard.canLoad(routeMock, routeStateMock)).toEqual(false);
      expect(router.navigate).toHaveBeenCalledWith(['user/login']);
    })
  );

  it('should allow the authenticated user to access app', async(
    inject([AuthGuard, AuthService], (guard: AuthGuard, authService ) => {
      authService.refreshToken = 'some token';
      expect(guard.canActivate(routeMock, routeStateMock)).toEqual(true);
      expect(guard.canLoad(routeMock, routeStateMock)).toEqual(true);
    })
  ));

});
