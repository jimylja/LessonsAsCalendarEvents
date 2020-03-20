import { Action } from '@ngrx/store';

export enum UserActionTypes {
  Login = '[User] User Login',
  LoggedSuccessful = '[User] LoggedIn Successful',
  LoggedFailed = '[User] Logged Failed',
  GetUser = '[User] Get User Data',
  UserFetchedSuccessful = '[User] User Fetched Successful',
  UserFetchFailed = '[USER] User Fetch Failed',
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

export class GetUser implements Action {
  readonly type = UserActionTypes.GetUser;
}

export class UserFetchedSuccessful implements Action {
  readonly type = UserActionTypes.UserFetchedSuccessful;
  constructor(public payload: any) {}
}

export class UserFetchFailed implements Action {
  readonly type = UserActionTypes.UserFetchFailed;
}

export type UserActions = Login
  |LoggedSuccessful
  |LoggedFailed
  |GetUser
  |UserFetchedSuccessful
  |UserFetchFailed;
