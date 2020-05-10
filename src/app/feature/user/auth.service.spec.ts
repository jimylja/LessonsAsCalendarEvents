import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { environment } from '../../../environments/environment';
import { GoogleAuthService } from 'ng-gapi';
import { mockUser } from './mock/user.mock';
import { dummyToken, mockAuthService, dummyUserInfoResp, mockStorage} from './mock/gapi.mock';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;

  beforeAll( () => {
    spyOn(localStorage, 'getItem').and.callFake(mockStorage('localStorage').getItem);
    spyOn(localStorage, 'setItem').and.callFake(mockStorage('localStorage').setItem);
    spyOn(localStorage, 'removeItem').and.callFake(mockStorage('localStorage').removeItem);
    spyOn(sessionStorage, 'getItem').and.callFake(mockStorage('sessionStorage').getItem);
    spyOn(sessionStorage, 'setItem').and.callFake(mockStorage('sessionStorage').setItem);
    spyOn(sessionStorage, 'removeItem').and.callFake(mockStorage('sessionStorage').removeItem);
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        {provide: GoogleAuthService, useValue: mockAuthService},
      ]
    });
    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return tokens from storage', () => {
    localStorage.setItem('refreshToken', 'some_refresh_token');
    const returnValue = service.refreshToken;
    expect(localStorage.getItem).toHaveBeenCalled();
    expect(returnValue).toEqual('some_refresh_token');
    service.logout();
    expect(service.refreshToken).toEqual(null);
    expect(service.accessToken).toEqual(null);
    service.ngOnDestroy();
  });

  describe('login method', () => {
    it('first signIn should return user, fetch and and set refresh token', () => {
      localStorage.removeItem('refreshToken');
      sessionStorage.removeItem('accessToken');
      service.login().subscribe(user => {
        expect(user).toEqual(mockUser);
        expect(service.accessToken).toEqual(dummyToken.accessToken);
        expect(service.refreshToken).toEqual(dummyToken.refreshToken);
        }
      );
      const request = httpMock.expectOne(`${environment.apiEndpoints.token}`);
      expect(request.request.method).toEqual('POST');
      expect(request.request.body.grant_type).toEqual('authorization_code');
      request.flush({...dummyToken, refresh_token: dummyToken.refreshToken});
    });

    it('signIn with refresh token should return user data and set the access token', () => {
      localStorage.setItem('refreshToken', 'some_refresh_token');
      sessionStorage.removeItem('accessToken');
      service.login().subscribe(user => {
        expect(user).toEqual(mockUser);
        expect(service.accessToken).toEqual(dummyToken.accessToken);
        }
      );
    });

    it('should return user data if both tokens are present', () => {
      localStorage.setItem('refreshToken', 'some_refresh_token');
      sessionStorage.setItem('accessToken', 'some_access_token');
      service.login().subscribe(user => {
        expect(user).toEqual(mockUser);
      });
    });
  });

  it ('if user logged, it should return user data after fetching it directly by request to endpoint', () => {
    localStorage.setItem('refreshToken', 'some_refresh_token');
    sessionStorage.setItem('accessToken', 'some access token');
    service.getUserInfo().subscribe(user => { expect(user).toEqual(mockUser); });
    const request = httpMock.expectOne(`${environment.apiEndpoints.user}`);
    expect(request.request.method).toEqual('GET');
    request.flush(dummyUserInfoResp);
  });

  it ('if user not logged, it should return user data after request', () => {
    localStorage.setItem('refreshToken', 'some_refresh_token');
    sessionStorage.removeItem('accessToken');
    service.getUserInfo().subscribe(user => { expect(user).toEqual(mockUser); });
    const requestUser = httpMock.expectOne(`${environment.apiEndpoints.user}`);
    expect(requestUser.request.method).toEqual('GET');
    requestUser.flush(dummyUserInfoResp);
  });
});
