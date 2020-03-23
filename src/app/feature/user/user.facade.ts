import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromUser from './state';
import * as UserActions from './state/user.actions';

@Injectable()
export class UserFacade {

  user$ = this.store.select(fromUser.getCurrentUser);
  settings$ = this.store.select(fromUser.getUserSettings);
  constructor(private store: Store<fromUser.State>) {
    this.store.dispatch(new UserActions.GetUser());
  }

  login(): void {
    this.store.dispatch(new UserActions.Login());
  }

  logout(): void {
    this.store.dispatch(new UserActions.Logout());
  }
}
