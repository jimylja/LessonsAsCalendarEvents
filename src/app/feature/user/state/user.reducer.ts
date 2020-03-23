import {UserActions, UserActionTypes} from './user.actions';
import {User} from '../../../models/user';
import {LessonsSettings} from '../../../models/lessonsSettings';

// State for this feature (User)
export interface UserState {
  isLoggedIn: boolean;
  profile: User | null;
  settings: LessonsSettings;
}

const initialState: UserState = {
  isLoggedIn: false,
  profile: null,
  settings: null
};

export function reducer(state = initialState, action: UserActions): UserState {
  switch (action.type) {
    case UserActionTypes.LoggedSuccessful:
    case UserActionTypes.UserFetchedSuccessful:
      return {
        ...state,
        isLoggedIn: true,
        profile: action.payload
      };
    case UserActionTypes.LoggedFailed:
      return {
        ...state,
        isLoggedIn: false
      };
    case UserActionTypes.LogoutSuccessful:
      return {
        ...state,
        isLoggedIn: false,
        profile: null
      };
    case UserActionTypes.UserFetchFailed:
      return {
        ...state,
        isLoggedIn: false,
        profile: null
      };
    case UserActionTypes.SettingsFetchedSuccessful:
      return  {
        ...state,
        settings: action.payload
      };
    case UserActionTypes.SettingsFetchFailed:
      return {
        ...state,
        settings: null
      };
    case UserActionTypes.GetUserSettings:
    case UserActionTypes.Login:
    case UserActionTypes.Logout:
    default:
      return state;
  }
}
