import { Injectable, NgZone } from '@angular/core';
import { GoogleAuthService } from 'ng-gapi';
import { HttpClient } from '@angular/common/http';
import GoogleUser = gapi.auth2.GoogleUser;
import GoogleAuth = gapi.auth2.GoogleAuth;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public static readonly SESSION_STORAGE_KEY: string = 'accessToken';
  private user: GoogleUser = undefined;
  token: string;

  constructor(
    private httpClient: HttpClient,
    private googleAuthService: GoogleAuthService,
    private ngZone: NgZone
  ) { }

  public signIn() {
    this.googleAuthService.getAuth().subscribe((auth) => {
      auth.signIn().then(
        res => this.signInSuccessHandler(res),
        err => this.signInErrorHandler(err)
      );
    });
  }

  private signInSuccessHandler(res: GoogleUser) {
    this.ngZone.run(() => {
      this.user = res;
      sessionStorage.setItem(
        AuthService.SESSION_STORAGE_KEY, res.getAuthResponse().access_token
      );
    });
  }

  private signInErrorHandler(err) {
    console.warn('signInError', err);
  }
}
