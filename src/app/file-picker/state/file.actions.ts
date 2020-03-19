import { Action } from '@ngrx/store';
import { DriveFile } from '../drive-file';

export enum FileActionTypes {
  FileSelected = '[File] File Selected',
}

export class FileSelected implements Action {
  readonly type = FileActionTypes.FileSelected;
  constructor( public payload: DriveFile) {
  }
}

// export class LoggedSuccessful implements Action {
//   readonly type = FileActionTypes.LoggedSuccessful;
//   constructor(public payload: any) {}
// }
//
// export class LoggedFailed implements Action {
//   readonly type = FileActionTypes.LoggedFailed;
// }

export type FileActions = FileSelected;
  // |LoggedSuccessful
  // |LoggedFailed;
