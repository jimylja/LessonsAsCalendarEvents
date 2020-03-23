import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from '../../../state/app.state';
import * as fromUser from './user.reducer';

export interface State extends fromRoot.AppState {
  user: fromUser.UserState;
}

const getUserFeatureState = createFeatureSelector<fromUser.UserState>('user');

export const getCurrentUser = createSelector(
  getUserFeatureState,
  state => state.profile
);

export const getLoginStatus = createSelector(
  getUserFeatureState,
  state => state.isLoggedIn
);

export const getUserSettings = createSelector(
  getUserFeatureState,
  state => state.settings
);
