import { Injectable, OnDestroy } from '@angular/core';
import { GoogleAuthService } from 'ng-gapi';
import { HttpClient, HttpResponse } from '@angular/common/http';
import GoogleUser = gapi.auth2.GoogleUser;
import GoogleAuth = gapi.auth2.GoogleAuth;
import {catchError, map, switchMap, tap, takeUntil, retryWhen, mergeMap} from 'rxjs/operators';
import {Observable, from, throwError, Subject, interval, timer } from 'rxjs';
import { User } from '../../models/user';
import { TokenRefreshParams, TokenAccessParams, TokenReqParams, Token } from './token.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {

  private static readonly SESSION_ST_ACCESS_TOKEN: string = 'accessToken';
  private static readonly LOCAL_ST_REFRESH_TOKEN: string = 'refreshToken';
  private readonly TOKEN_ENDPOINT = environment.apiEndpoints.token;
  private readonly USER_ENDPOINT = environment.apiEndpoints.user;

  private onDestroy$ = new Subject();
  private isTimerStarted = false;

  private tokenRequestParams: TokenReqParams = {
    client_id: environment.gApiClient.clientId,
    client_secret: environment.gApiClient.clientSecret,
    redirect_uri: environment.gApiClient.redirect_uri,
    grant_type: 'authorization_code'
  };

  constructor(
    private httpClient: HttpClient,
    private googleAuthService: GoogleAuthService,
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
   * if a user was logged the method returns user info, if not - checks that if refresh token has been stored
   * and accordingly to this uses different methods for user sing-in
   * @returns - the data of the authorized user
   */
  public login(): Observable<User> {
    const isUserLoggedIn = this.refreshToken && this.accessToken;
    if (isUserLoggedIn) {
      return this.getUserInfo();
    } else {
      return this.googleAuthService.getAuth().pipe(
        switchMap( auth => {
          return (!this.refreshToken) ? this.firstSignIn(auth) : this.defaultSignIn(auth);
        })
      );
    }
  }

  /**
   * Method removes access token from session
   */
  private removeAccessToken(): void {
    sessionStorage.removeItem(AuthService.SESSION_ST_ACCESS_TOKEN);
    this.onDestroy$.next();
  }

  /**
   * Method logout's user and removes all tokens
   */
  public logout(): void {
    localStorage.removeItem(AuthService.LOCAL_ST_REFRESH_TOKEN);
    this.removeAccessToken();
  }

  /**
   * The method returns the data of the user who was authorized
   * and triggers logout method after 401 error
   * @returns - user data
   */
  getUserInfo(): Observable<User> {
    return this.httpClient.get(this.USER_ENDPOINT).pipe(
      tap(() => {if (!this.isTimerStarted) { this.updateTokenTimer().subscribe(); }}),
      map((res: any) => AuthService.parseUserData(res)),
      retryWhen(this.retryWithNewToken()),
      catchError(() => { throw Error('Invalid Credentials'); }),
    );
  }

  /**
   * Method for retryWhen operator,
   * retry request 3 times with update access token
   * if maximum number of retries have been met or status code of response not equal 401, throw error
   * @returns - function with retry strategy
   */
  retryWithNewToken() {
    return (attempts: Observable<any>) => {
      const scalingDuration = 500;
      const maxRetryAttempts = 3;
      return attempts.pipe(
        mergeMap((error, i) => {
          const retryAttempt = i + 1;
          if (retryAttempt > maxRetryAttempts || error.status !== 401) { return throwError(error); }
          return timer(retryAttempt * scalingDuration).pipe(switchMap(() => this.updateAccessToken()));
        }),
      );
    };
  }

  /**
   * The method makes sign-in action and return's data of the user who was authorized
   * method will be used when grants were allowed after first sign in
   * @params auth - GoogleAuth object
   * @returns - user data
   */
  private firstSignIn(auth: GoogleAuth): Observable<User> {
    return from(auth.grantOfflineAccess()).pipe(
      switchMap(code => this.fetchToken({code: code.code}).pipe(
        map(() => this.signInSuccessHandler(auth.currentUser.get()))
      ))
    );
  }


  /**
   * The method makes sign-in action and return's data of the user who was authorized
   * method will be used when grants were allowed after first sign in
   * @params auth - GoogleAuth object
   * @returns - user data
   */
  private defaultSignIn(auth: GoogleAuth): Observable<User> {
    return from(
      auth.signIn().then(
        (res: GoogleUser) => this.signInSuccessHandler(res),
        err => { throw Error(err); }
      )).pipe(
      map((user: User) => user),
      catchError(() => throwError('login failed'))
    );
  }

  /**
   * The method fetches access token or both tokens (access and refresh) depending of received options
   * and stores them to local and session storage's
   * @params params - object, that determine which grant of token gets
   * details: https://developers.google.com/identity/protocols/oauth2/web-server#creatingclient
   * @returns - object with token data
   */
  private fetchToken(params: TokenAccessParams | TokenRefreshParams): Observable<Token> {
    const requestParams = {
      ...this.tokenRequestParams,
      ...params
    };
    return this.httpClient.post(this.TOKEN_ENDPOINT, requestParams).pipe(
      tap((res: Token) => {
        const {access_token, refresh_token} = res;
        sessionStorage.setItem(AuthService.SESSION_ST_ACCESS_TOKEN, access_token);
        if (refresh_token) { localStorage.setItem(AuthService.LOCAL_ST_REFRESH_TOKEN, refresh_token); }
      })
    );
  }

  /**
   * Method aggregates data from object that was received after successful sign-in action
   * store's access token to local storage and
   * starts timer that triggers update token action
   * @params user - Google User obj
   * @returns - user data
   */
  private signInSuccessHandler(user: GoogleUser): User {
    sessionStorage.setItem(AuthService.SESSION_ST_ACCESS_TOKEN, user.getAuthResponse().access_token);
    this.updateTokenTimer().subscribe();
    return AuthService.parseUserData(user);
  }

  /**
   * Method use current token to get new token
   * @returns - New token
   */
  private updateAccessToken(): Observable<any> {
    if (!this.refreshToken) { return throwError('update token is not available'); }
    return this.fetchToken({
      refresh_token: this.refreshToken,
      grant_type: 'refresh_token'
    });
  }

  /**
   * Method creates recursive timeout which refreshes token after delay
   * and triggers logout method after 401 error
   */
  private updateTokenTimer(): Observable<HttpResponse<object|null>> {
    this.isTimerStarted = true;
    const delay = 35680000;
    return interval(delay).pipe(
      switchMap(() => this.updateAccessToken()),
      catchError(error => {
        if (error.status === 401 || error.status === 400) {
          this.removeAccessToken();
        }
        return throwError(error);
      }),
      takeUntil(this.onDestroy$)
    );
  }

  /**
   * A getter for refresh token which stored in local storage
   * @returns - refresh token
   */
  get refreshToken(): string {
    const refreshToken = localStorage.getItem(AuthService.LOCAL_ST_REFRESH_TOKEN);
    if (!refreshToken) {
      throwError('refresh token not set');
    }
    return localStorage.getItem(AuthService.LOCAL_ST_REFRESH_TOKEN);
  }

  /**
   * A getter for access token which stored in session storage
   * @returns - auth token
   */
  get accessToken(): string {
    const token = sessionStorage.getItem(AuthService.SESSION_ST_ACCESS_TOKEN);
    if (!token) {
      throwError('no token set, authentication required');
    }
    return sessionStorage.getItem(AuthService.SESSION_ST_ACCESS_TOKEN);
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
