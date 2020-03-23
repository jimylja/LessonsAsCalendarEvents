import { Action } from '@ngrx/store';
import {User} from '../../../models/user';
import {LessonsSettings} from '../../../models/lessonsSettings';

export enum UserActionTypes {
  Login = '[User] User Login',
  LoggedSuccessful = '[User] LoggedIn Successful',
  LoggedFailed = '[User] Logged Failed',
  Logout = '[User ] Logout',
  LogoutSuccessful = '[User] LogoutSuccessful',
  GetUser = '[User] Get User Data',
  UserFetchedSuccessful = '[User] User Fetched Successful',
  UserFetchFailed = '[User] User Fetch Failed',
  GetUserSettings = '[User] Get Settings',
  SettingsFetchedSuccessful = '[User] Settings Fetched Successful',
  SettingsFetchFailed = '[User] Settings Fetch Failed',
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

export class Logout implements Action {
  readonly type = UserActionTypes.Logout;
}

export class LogoutSuccessful implements Action {
  readonly type = UserActionTypes.LogoutSuccessful;
}

export class GetUser implements Action {
  readonly type = UserActionTypes.GetUser;
}

export class UserFetchedSuccessful implements Action {
  readonly type = UserActionTypes.UserFetchedSuccessful;
  constructor(public payload: User) {}
}

export class UserFetchFailed implements Action {
  readonly type = UserActionTypes.UserFetchFailed;
}

export class GetUserSettings implements Action {
  readonly type = UserActionTypes.GetUserSettings;
  constructor(public payload: User) {}
}

export class SettingsFetchedSuccessful implements Action {
  readonly type = UserActionTypes.SettingsFetchedSuccessful;
  constructor(public payload: LessonsSettings) {}
}

export class SettingsFetchFailed implements Action {
  readonly type = UserActionTypes.SettingsFetchFailed;
}

export type UserActions = Login
  |LoggedSuccessful
  |LoggedFailed
  |Logout
  |LogoutSuccessful
  |GetUser
  |UserFetchedSuccessful
  |UserFetchFailed
  |GetUserSettings
  |SettingsFetchedSuccessful
  |SettingsFetchFailed;
