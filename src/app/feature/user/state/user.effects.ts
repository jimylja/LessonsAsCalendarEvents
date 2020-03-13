import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { AuthService } from '../auth.service';

/* NgRx */
import { Actions, Effect, ofType } from '@ngrx/effects';
import {Action} from '@ngrx/store';
import * as userActions from './user.actions';

@Injectable()
export class UserEffects {

  constructor(private authService: AuthService,
              private actions$: Actions) {
  }

  @Effect()
  user$: Observable<Action> = this.actions$.pipe(
    ofType(userActions.UserActionTypes.GetUser),
    mergeMap(() => this.authService.getUser().pipe(
      map(user => (new userActions.UserFetchedSuccessful(user))),
      catchError(() => of(new userActions.UserFetchFailed()))
    ))
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
}
