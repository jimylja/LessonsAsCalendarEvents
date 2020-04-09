import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from '../../../state/app.state';
import * as fromUser from './user.reducer';

export interface State extends fromRoot.AppState {
  user: fromUser.UserState;
}

const getUserFeatureState = createFeatureSelector<fromUser.UserState>('user');

export const getUserProfile = createSelector(
  getUserFeatureState,
  state => state.profile
);

export const getUserSettings = createSelector(
  getUserFeatureState,
  state => state.settings
);

export const getUserStats = createSelector(
  getUserFeatureState,
  state => state.statistic
);
