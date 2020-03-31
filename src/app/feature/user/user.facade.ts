import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromUser from './state';
import * as UserActions from './state/user.actions';
import {LessonsSettings} from '../../models/lessonsSettings';

@Injectable()
export class UserFacade {

  user$ = this.store.select(fromUser.getCurrentUser);
  settings$ = this.store.select(fromUser.getUserSettings);
  loginStatus$ = this.store.select(fromUser.getLoginStatus);
  constructor(private store: Store<fromUser.State>) {}

  login(): void {
    this.store.dispatch(new UserActions.Login());
  }

  getUser(): void {
    this.store.dispatch(new UserActions.GetUser());
  }

  logout(): void {
    this.store.dispatch(new UserActions.Logout());
  }

  saveSettings(settings: LessonsSettings): void {
    this.store.dispatch( new UserActions.SaveUserSettings(settings));
  }
}
