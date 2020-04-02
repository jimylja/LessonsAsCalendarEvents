import { Action } from '@ngrx/store';
import {CalendarExportStats, User} from '../../../models/user';
import {LessonsSettings} from '../../../models/lessonsSettings';
import {UserState} from './user.reducer';

export enum UserActionTypes {
  Login = '[User] User Login',
  LoggedSuccessful = '[User] LoggedIn Successful',
  LoggedFailed = '[User] Logged Failed',
  Logout = '[User ] Logout',
  LogoutSuccessful = '[User] LogoutSuccessful',
  GetGoogleProfile = '[User] Get GoogleProfile',
  GoogleProfileFetchedSuccessful = '[User] GoogleProfile Fetched Successful',
  GoogleProfileFetchFailed = '[User] GoogleProfile Failed',
  GetUserSettings = '[User] Get Settings',
  SettingsFetchedSuccessful = '[User] Settings Fetched Successful',
  SettingsFetchFailed = '[User] Settings Fetch Failed',
  SaveUserSettings = '[User] Save User Settings',
  SettingsSaved = '[User] Settings has been saved',
  SettingsNotSaved = '[User] Settings not saved',
  GetUserData = '[User] Get User Data',
  UserDataFetchedSuccessful = '[User] User Data Fetched Successful',
  UserDataFetchFailed = '[User] User Data Fetch Failed',
  UpdateUserStatistic = '[User] Update User Statistic',
  StatisticUpdateSuccessful = '[User] User Statistic Was Updated',
  StatisticUpdateFailed = '[User] User Statistic Was Not Updated' ,
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

export class GetGoogleProfile implements Action {
  readonly type = UserActionTypes.GetGoogleProfile;
}

export class GoogleProfileFetchedSuccessful implements Action {
  readonly type = UserActionTypes.GoogleProfileFetchedSuccessful;
  constructor(public payload: User) {}
}

export class GoogleProfileFetchFailed implements Action {
  readonly type = UserActionTypes.GoogleProfileFetchFailed;
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

export class SaveUserSettings implements Action {
  readonly type = UserActionTypes.SaveUserSettings;
  constructor(public payload: LessonsSettings) {}
}

export class SettingsSaved implements Action {
  readonly type = UserActionTypes.SettingsSaved;
  constructor(public payload: LessonsSettings) {}
}

export class SettingsNotSaved implements Action {
  readonly type = UserActionTypes.SettingsNotSaved;
}

export class GetUserData implements Action {
  constructor(public payload: User) {}
  readonly type = UserActionTypes.GetUserData;
}

export class UserDataFetchedSuccessful implements Action {
  constructor(public payload: UserState) {}
  readonly type = UserActionTypes.UserDataFetchedSuccessful;
}

export class UserDataFetchFailed implements Action {
  readonly type = UserActionTypes.UserDataFetchFailed;
}

export class UpdateUserStatistic implements Action {
  constructor(public payload: CalendarExportStats) {}
  readonly type = UserActionTypes.UpdateUserStatistic;
}

export class StatisticUpdateSuccessful implements Action {
  readonly type = UserActionTypes.StatisticUpdateSuccessful;
}

export class StatisticUpdateFailed implements Action {
  readonly type = UserActionTypes.StatisticUpdateFailed;
}

export type UserActions = Login
  |LoggedSuccessful
  |LoggedFailed
  |Logout
  |LogoutSuccessful
  |GetGoogleProfile
  |GoogleProfileFetchedSuccessful
  |GoogleProfileFetchFailed
  |GetUserSettings
  |SettingsFetchedSuccessful
  |SettingsFetchFailed
  |SaveUserSettings
  |SettingsSaved
  |SettingsNotSaved
  |GetUserData
  |UserDataFetchedSuccessful
  |UserDataFetchFailed
  |UpdateUserStatistic
  |StatisticUpdateSuccessful
  |StatisticUpdateFailed;
