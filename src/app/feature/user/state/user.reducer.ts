import {UserActions, UserActionTypes} from './user.actions';
import {User, UserStats, CalendarExportStats} from '../../../models/user';
import {LessonsSettings} from '../../../models/lessonsSettings';
import {environment} from '../../../../environments/environment';

// State for this feature (User)
export interface UserState {
  profile: User | null;
  settings: LessonsSettings;
  statistic: UserStats;
}

export const userInitialState: UserState = {
  profile: null,
  settings: environment.settings,
  statistic: {
    activity: [],
    lastVisit: null,
    lastCalendar: null
  }
};

export function reducer(state = userInitialState, action: UserActions): UserState {
  switch (action.type) {
    case UserActionTypes.LoggedSuccessful:
    case UserActionTypes.GoogleProfileFetchedSuccessful:
      return {
        ...state,
        profile: action.payload
      };
    case UserActionTypes.LoggedFailed:
    case UserActionTypes.LogoutSuccessful:
    case UserActionTypes.GoogleProfileFetchFailed:
      return {
        ...state,
        profile: null
      };
    case UserActionTypes.SettingsSaved:
      return  {
        ...state,
        settings: action.payload
      };
    case UserActionTypes.UserDataFetchedSuccessful:
      return {
        ...state,
        ...action.payload,
      };
    case UserActionTypes.UserDataFetchFailed:
      return {
        ...state,
        settings: environment.settings
      };
    case UserActionTypes.UpdateUserStatistic:
      return {
        ...state,
        statistic: {
          ...state.statistic,
          lastCalendar: action.payload.calendar,
          activity: updateActivityState(state.statistic.activity, action.payload)
        }
      };
    case UserActionTypes.StatisticUpdateSuccessful:
    case UserActionTypes.Login:
    case UserActionTypes.SaveUserSettings:
    case UserActionTypes.GetUserData:
    case UserActionTypes.SettingsNotSaved:
    case UserActionTypes.Logout:
    default:
      return state;
  }
}

const updateActivityState = (activityState: CalendarExportStats[], newStats: CalendarExportStats) => {
  const itemPos = activityState.findIndex(item => item.calendar === newStats.calendar);
  if (itemPos === -1) {
    activityState.push(newStats);
  } else {
    activityState[itemPos].exportSuccess += newStats.exportSuccess;
    activityState[itemPos].exportFail += newStats.exportFail;
  }
  return activityState;
};
