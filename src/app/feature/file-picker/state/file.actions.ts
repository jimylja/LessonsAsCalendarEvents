import { Action } from '@ngrx/store';
import { DriveFile } from '../../../models/drive-file';
import { ParseError } from './file.reducer';

export enum FileActionTypes {
  FileSelected = '[File] File Selected',
  ValidationFailed = '[File] The File Does Not Match The Template',
}

export class FileSelected implements Action {
  readonly type = FileActionTypes.FileSelected;
  constructor(public payload: DriveFile) {}
}

export class ValidationFailed implements Action {
  readonly type = FileActionTypes.ValidationFailed;
  constructor(public payload: ParseError) {}
}

export type FileActions = FileSelected|ValidationFailed;
