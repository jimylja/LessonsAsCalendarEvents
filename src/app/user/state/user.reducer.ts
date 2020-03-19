import { UserActions, UserActionTypes } from './user.actions';
import { User } from '../../models/user';

// State for this feature (User)
export interface UserState {
  isLoggedIn: boolean;
  userProfile: User | null;
}

const initialState: UserState = {
  isLoggedIn: false,
  userProfile: null
};

export function reducer(state = initialState, action: UserActions): UserState {
  switch (action.type) {
    case UserActionTypes.LoggedSuccessful:
      return {
        ...state,
        isLoggedIn: true,
        userProfile: action.payload
      };
    case UserActionTypes.LoggedFailed:
      return {
        ...state,
        isLoggedIn: false
      };
    case UserActionTypes.Login:
    default:
      return state;
  }
}
