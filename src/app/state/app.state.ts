import {userInitialState, UserState} from '../feature/user/state/user.reducer';
import {activeItemsInitialState, ActiveItemsState} from '../feature/active-items/state/active-items.reducer';

// Representation of the entire app state
// Extended by lazy loaded modules
export interface AppState {
  user: UserState;
  activeItems: ActiveItemsState;
}

export const appInitialState: AppState = {
  activeItems: activeItemsInitialState,
  user: userInitialState,
};
