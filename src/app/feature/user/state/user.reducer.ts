import {UserActions, UserActionTypes} from './user.actions';
import {User} from '../../../models/user';
import {LessonsSettings} from '../../../models/lessonsSettings';
import {environment} from '../../../../environments/environment';

// State for this feature (User)
export interface UserState {
  isLoggedIn: boolean;
  profile: User | null;
  settings: LessonsSettings;
}

export const userInitialState: UserState = {
  isLoggedIn: false,
  profile: null,
  settings: null
};

export function reducer(state = userInitialState, action: UserActions): UserState {
  switch (action.type) {
    case UserActionTypes.LoggedSuccessful:
    case UserActionTypes.UserFetchedSuccessful:
      return {
        ...state,
        isLoggedIn: true,
        profile: action.payload
      };
    case UserActionTypes.LoggedFailed:
    case UserActionTypes.LogoutSuccessful:
    case UserActionTypes.UserFetchFailed:
      return {
        ...state,
        isLoggedIn: false,
        profile: null
      };
    case UserActionTypes.SettingsFetchedSuccessful:
    case UserActionTypes.SettingsSaved:
      return  {
        ...state,
        settings: action.payload
      };
    case UserActionTypes.SettingsFetchFailed:
      return {
        ...state,
        settings: environment.settings
      };
    case UserActionTypes.Login:
    case UserActionTypes.GetUserSettings:
    case UserActionTypes.SaveUserSettings:
    case UserActionTypes.SettingsNotSaved:
    case UserActionTypes.Logout:
    default:
      return state;
  }
}
