import { Injectable, NgZone } from '@angular/core';
import { GoogleAuthService } from 'ng-gapi';
import { HttpClient } from '@angular/common/http';
import GoogleUser = gapi.auth2.GoogleUser;
import GoogleAuth = gapi.auth2.GoogleAuth;
import {catchError, map, switchMap} from 'rxjs/operators';
import {Observable, from, throwError} from 'rxjs';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public static readonly SESSION_STORAGE_KEY: string = 'accessToken';
  private token: string;

  constructor(
    private httpClient: HttpClient,
    private googleAuthService: GoogleAuthService,
    private ngZone: NgZone
  ) { }

  static signInErrorHandler(err) {
    throw Error(err);
  }

  static parseUserData(user: GoogleUser): User {
    const profile = user.getBasicProfile();
    return {
      id: profile.getId(),
      firstName: profile.getGivenName(),
      lastName: profile.getFamilyName(),
      avatar: profile.getImageUrl(),
      email: profile.getEmail()
    };
  }

  public getUser(auth: GoogleAuth): Observable<any> {
    return from(
      auth.signIn().then(
        res => this.signInSuccessHandler(res),
        err => AuthService.signInErrorHandler(err)
      )).pipe(
        map(user => user),
        catchError(() => throwError('login failed'))
      );
  }

  public signIn(): Observable<User> {
    return this.googleAuthService.getAuth().pipe(
      switchMap(auth => this.getUser(auth))
    );
  }

  private signInSuccessHandler(res: GoogleUser): User {
    this.ngZone.run(() => {
      sessionStorage.setItem(
        AuthService.SESSION_STORAGE_KEY, res.getAuthResponse().access_token
      );
    });
    return AuthService.parseUserData(res);
  }

  public isUserSignedIn(): boolean {
    if (sessionStorage.getItem(AuthService.SESSION_STORAGE_KEY)) {
      return sessionStorage.getItem(AuthService.SESSION_STORAGE_KEY).length > 0;
    }
    return false;
  }

  public getToken(): string {
    this.token = sessionStorage.getItem(AuthService.SESSION_STORAGE_KEY);
    if (!this.token) {
      throw new Error('no token set, authentication required');
    }
    return sessionStorage.getItem(AuthService.SESSION_STORAGE_KEY);
  }
}
