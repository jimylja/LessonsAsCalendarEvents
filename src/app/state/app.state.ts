import { UserState } from '../feature/user/state/user.reducer';
import { FileState } from '../feature/file-picker/state/file.reducer';
// import {createFeatureSelector, createSelector} from '@ngrx/store';
// Representation of the entire app state
// Extended by lazy loaded modules
export interface AppState {
  user: UserState;
  file: FileState;
}

// const getFileFeatureState = createFeatureSelector<FileState>('file');
//
// export const getCurrentFile = createSelector(
//   getFileFeatureState,
//   state => state
// );
