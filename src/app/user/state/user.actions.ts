import { Action } from '@ngrx/store';

export enum UserActionTypes {
  Login = '[User] User Login',
  LoggedSuccessful = '[User] LoggedIn Successful',
  LoggedFailed = '[User] Logged Failed'
}

export class Login implements Action {
  readonly type = UserActionTypes.Login;
}

export class LoggedSuccessful implements Action {
  readonly type = UserActionTypes.LoggedSuccessful;
  constructor(public payload: any) {}
}

export class LoggedFailed implements Action {
  readonly type = UserActionTypes.LoggedFailed;
}

export type UserActions = Login
  |LoggedSuccessful
  |LoggedFailed;
