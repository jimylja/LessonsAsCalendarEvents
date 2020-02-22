// import { Injectable } from '@angular/core';
//
// import { Observable, of } from 'rxjs';
// import { mergeMap, map, catchError, tap } from 'rxjs/operators';
//
// import { AuthService } from '../auth.service';
//
// /* NgRx */
// import { Actions, Effect, ofType } from '@ngrx/effects';
// import {Action} from '@ngrx/store';
// import * as userActions from './file.actions';
//
// @Injectable()
// export class FileEffects {
//
//   constructor(private authService: AuthService,
//               private actions$: Actions) {
//   }
//
//   @Effect()
//   login$: Observable<Action> = this.actions$.pipe(
//     tap(data => console.log('effects work', data)),
//     ofType(userActions.FileActionTypes.Login),
//     mergeMap(() =>
//       this.authService.signIn().pipe(
//         map(user => (new userActions.LoggedSuccessful(user))),
//         catchError(() => of(new userActions.LoggedFailed()))
//       )
//     )
//   );
// }
