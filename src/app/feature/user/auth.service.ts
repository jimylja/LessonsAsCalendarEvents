import { Injectable, NgZone, OnDestroy } from '@angular/core';
import { GoogleAuthService } from 'ng-gapi';
import { HttpClient, HttpResponse } from '@angular/common/http';
import GoogleUser = gapi.auth2.GoogleUser;
import GoogleAuth = gapi.auth2.GoogleAuth;
import { catchError, map, switchMap, tap, takeUntil } from 'rxjs/operators';
import { Observable, from, throwError, Subject, interval } from 'rxjs';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {

  public static readonly SESSION_STORAGE_KEY: string = 'accessToken';
  private token: string;
  private onDestroy$ = new Subject();
  private isTimerStarted = false;

  constructor(
    private httpClient: HttpClient,
    private googleAuthService: GoogleAuthService,
    private ngZone: NgZone
  ) { }

  static parseUserData(user: GoogleUser | any): User {
    if ('sub' in user) {
      return {
        id: user.sub,
        firstName: user.given_name,
        lastName: user.family_name,
        avatar: user.picture,
        email: user.email
      };
    }
    const profile = user.getBasicProfile();
    return {
      id: profile.getId(),
      firstName: profile.getGivenName(),
      lastName: profile.getFamilyName(),
      avatar: profile.getImageUrl(),
      email: profile.getEmail()
    };
  }

  /**
   * Method get token and User data from Google OAuth and saves token to SessionStorage
   * @returns - active user data
   */
  public login(): Observable<User> {
    if (!this.getToken()) {
      return this.googleAuthService.getAuth().pipe(
        switchMap(auth => this.signIn(auth))
      );
    } else {
      return this.getUser();
    }
  }

  /**
   * Method logout's user
   */
  public logout(): void {
    sessionStorage.removeItem(AuthService.SESSION_STORAGE_KEY);
    this.onDestroy$.next();
  }

  /**
   * Method return auth token from session storage
   * @returns - auth token
   */
  public getToken(): string {
    this.token = sessionStorage.getItem(AuthService.SESSION_STORAGE_KEY);
    if (!this.token) {
      throwError('no token set, authentication required');
    }
    return sessionStorage.getItem(AuthService.SESSION_STORAGE_KEY);
  }

  /**
   * Method use current token to get new token
   * @returns - New token
   */
  private refreshToken(): Observable<any> {
    const refreshToken = {
      client_id: '187709823208-u52p9n3147kad6hf7pgirk52lauhmoo8.apps.googleusercontent.com',
      client_secret: 'lg2Qc67omXcU5Q-kj9Wmjb14',
      refresh_token: this.getToken(),
      grant_type: 'refresh_token'
    };

    return this.httpClient.post(
      'https://www.googleapis.com/oauth2/v4/token',
      refreshToken
    ).pipe(
      tap(res => sessionStorage.setItem(AuthService.SESSION_STORAGE_KEY, res.access_token))
    );
  }

  /**
   * Method creates recursive timeout which refreshes token after delay
   * and triggers logout method after 401 error
   */
  private refreshTokenTimer(): Observable<HttpResponse<object|null>> {
    this.isTimerStarted = true;
    const delay = 400000;
    return interval(delay)
      .pipe(
        switchMap(() => this.refreshToken()),
        catchError(error => {
          if (error.status === 401 || error.status === 400) {
            this.logout();
          }
          return throwError(error);
        }),
        takeUntil(this.onDestroy$)
      );
  }

  private signIn(auth: GoogleAuth): Observable<any> {
    return from(
      auth.signIn().then(
        res => this.signInSuccessHandler(res),
        err => { throw Error(err); }
      )).pipe(
      map(user => user),
      catchError(() => throwError('login failed'))
    );
  }

  /**
   * Method return auth token from session storage
   * @returns - auth token
   */
  private signInSuccessHandler(res: GoogleUser): User {
    this.ngZone.run(() => {
      sessionStorage.setItem(
        AuthService.SESSION_STORAGE_KEY, res.getAuthResponse().access_token
      );
    });
    this.refreshTokenTimer().subscribe();
    return AuthService.parseUserData(res);
  }

  /**
   * The method returns the data of the user who was authorized
   * and triggers logout method after 401 error
   * @returns - user data
   */
  getUser(): Observable<User> {
    return this.httpClient.get('https://www.googleapis.com/oauth2/v3/userinfo').pipe(
      map((res: any) => {
        if (!this.isTimerStarted) {
          this.refreshTokenTimer().subscribe();
        }
        return AuthService.parseUserData(res);
      }),
      catchError(error => {
        if (error.status === 401) { this.logout(); }
        return throwError(error);
      })
    );
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
