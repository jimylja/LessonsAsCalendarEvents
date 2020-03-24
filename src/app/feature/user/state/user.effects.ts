import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError, tap, switchMap } from 'rxjs/operators';
import { SettingsService } from '../settings.service';
import { AuthService } from '../auth.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import * as userActions from './user.actions';

@Injectable()
export class UserEffects {

  constructor(private authService: AuthService,
              private settingsService: SettingsService,
              private actions$: Actions) {
  }

  @Effect() user$: Observable<Action> = this.actions$.pipe(
    ofType(userActions.UserActionTypes.GetUser),
    switchMap(
      () => this.authService.getUserInfo().pipe(
        mergeMap(user => [
            new userActions.UserFetchedSuccessful(user),
            new userActions.GetUserSettings(user),
        ]),
        catchError(() => of(new userActions.UserFetchFailed()))
      )
    )
  );

  @Effect()
  login$: Observable<Action> = this.actions$.pipe(
    ofType(userActions.UserActionTypes.Login),
    mergeMap(() =>
      this.authService.login().pipe(
        map(user => (new userActions.LoggedSuccessful(user))),
        catchError(() => of(new userActions.LoggedFailed()))
      )
    )
  );

  @Effect()
  logout$: Observable<Action> = this.actions$.pipe(
    ofType(userActions.UserActionTypes.Logout),
    tap(() => this.authService.logout()),
    map(() => (new userActions.LogoutSuccessful()))
  );

  @Effect()
  getSettings$: Observable<Action> = this.actions$.pipe(
    ofType(userActions.UserActionTypes.GetUserSettings),
    mergeMap((action: userActions.GetUserSettings) => this.settingsService.getUserSettings(action.payload.id).pipe(
      map(settings => (new userActions.SettingsFetchedSuccessful(settings))),
      catchError(() => of(new userActions.SettingsFetchFailed()))
    ))
  );

  @Effect()
  saveSettings$: Observable<Action> = this.actions$.pipe(
    ofType(userActions.UserActionTypes.SaveUserSettings),
    mergeMap((action: userActions.SaveUserSettings) => this.settingsService.saveUserSettings(action.payload).pipe(
      map(settings => (new userActions.SettingsSaved(settings))),
      catchError(() => of(new userActions.SettingsNotSaved()))
    ))
  );
}
