import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from '../../../state/app.state';
import * as fromFile from './file.reducer';

export interface State extends fromRoot.AppState {
  file: fromFile.FileState;
}

const getFileFeatureState = createFeatureSelector<fromFile.FileState>('file');

export const getCurrentFile = createSelector(
  getFileFeatureState,
  state => state
);
