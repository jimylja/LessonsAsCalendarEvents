import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromUser from './state';
import * as UserActions from './state/user.actions';
import {LessonsSettings} from '../../models/lessonsSettings';
import {CalendarExportStats} from '../../models/user';
import { tap } from 'rxjs/operators';

@Injectable()
export class UserFacade {

  user$ = this.store.select(fromUser.getUserProfile).pipe(
    tap(data => { if (!data) {this.getUser(); }})
  );
  settings$ = this.store.select(fromUser.getUserSettings);
  userStatistic$ = this.store.select(fromUser.getUserStats);
  constructor(private store: Store<fromUser.State>) {}

  login(): void {
    this.store.dispatch(new UserActions.Login());
  }

  getUser(): void {
    this.store.dispatch(new UserActions.GetGoogleProfile());
  }

  logout(): void {
    this.store.dispatch(new UserActions.Logout());
  }

  saveSettings(settings: LessonsSettings): void {
    this.store.dispatch( new UserActions.SaveUserSettings(settings));
  }

  updateStatistic(calendarExportStats: CalendarExportStats) {
    this.store.dispatch(new UserActions.UpdateUserStatistic(calendarExportStats));
  }
}
