import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import {AuthGuard} from './auth.guard';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {GoogleAuthService} from 'ng-gapi';
import {provideMockStore} from '@ngrx/store/testing';
import {appInitialState} from '../../state/app.state';
import {AuthService} from '../user/auth.service';
import {Router} from '@angular/router';

describe('AuthGuard', () => {
  const routeMock: any = { snapshot: {}};
  const routeStateMock: any = { snapshot: {}, url: '/'};
  const initialState = appInitialState;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({initialState}),
        AuthGuard, AuthService,
        {provide: GoogleAuthService, useValue: {}},
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
      ],
    });
  });

  it('should create instance', inject([AuthGuard], (guard: AuthGuard) => {
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

  it('should allow the authenticated user to access app', waitForAsync(
    inject([AuthGuard, AuthService], (guard: AuthGuard, authService ) => {
      spyOnProperty(authService, 'refreshToken').and.returnValue('some token');
      expect(guard.canActivate(routeMock, routeStateMock)).toEqual(true);
      expect(guard.canLoad(routeMock, routeStateMock)).toEqual(true);
    })
  ));

});
