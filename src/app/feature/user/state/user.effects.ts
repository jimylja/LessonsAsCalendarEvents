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
              private actions$: Actions) {}

  @Effect() user$: Observable<Action> = this.actions$.pipe(
    ofType(userActions.UserActionTypes.GetGoogleProfile),
    switchMap(
      () => this.authService.getUserInfo().pipe(
        mergeMap(user => [
            new userActions.GoogleProfileFetchedSuccessful(user),
            new userActions.GetUserData(user)
        ]),
        catchError(() => of(new userActions.GoogleProfileFetchFailed()))
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
  activity$: Observable<Action> = this.actions$.pipe(
    ofType(userActions.UserActionTypes.UpdateUserStatistic),
    mergeMap(() => this.settingsService.updateStatistics().pipe(
      map(() => new userActions.StatisticUpdateSuccessful(),
        catchError(() => of(new userActions.StatisticUpdateFailed()))
      ))
    ));


  @Effect()
  getUserData$: Observable<Action> = this.actions$.pipe(
    ofType(userActions.UserActionTypes.GetUserData),
    mergeMap((action: userActions.GetUserData) => this.settingsService.getUserData(action.payload).pipe(
      map(user => user !== undefined ? new userActions.UserDataFetchedSuccessful(user) : new userActions.UserDataFetchFailed(),
      catchError(() => of(new userActions.UserDataFetchFailed()))
    ))
  ));

  @Effect()
  saveSettings$: Observable<Action> = this.actions$.pipe(
    ofType(userActions.UserActionTypes.SaveUserSettings),
    mergeMap((action: userActions.SaveUserSettings) => this.settingsService.updateUserSettings(action.payload).pipe(
      map(settings => (new userActions.SettingsSaved(settings))),
      catchError(() => of(new userActions.SettingsNotSaved()))
    ))
  );
}
