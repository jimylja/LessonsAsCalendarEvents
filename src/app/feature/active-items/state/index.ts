import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from '../../../state/app.state';
import * as fromActiveItems from './active-items.reducer';
import {activeItemsInitialState} from './active-items.reducer';

export interface State extends fromRoot.AppState {
  activeItems: fromActiveItems.ActiveItemsState;
}

const getActiveItemsFeatureState = createFeatureSelector<fromActiveItems.ActiveItemsState>('activeItems');

export const getActiveItems = createSelector(
  getActiveItemsFeatureState,
  state => {
    state = state ? state : activeItemsInitialState;
    return state;
  }
);

export const getActiveFile = createSelector(
  getActiveItemsFeatureState,
  state => {
    state = state ? state : activeItemsInitialState;
    return state.activeFile;
  }
);

export const getActiveCalendar = createSelector(
  getActiveItemsFeatureState,
  state => {
    state = state ? state : activeItemsInitialState;
    return state.activeCalendar;
  }
);
