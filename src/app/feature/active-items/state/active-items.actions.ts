import {Action} from '@ngrx/store';
import {DriveFile} from '../../../models/drive-file';
import {ParseError} from './active-items.reducer';
import {CalendarEntry} from '../../../models/calendar';

export enum ActiveItemsActionTypes {
  FileSelected = '[File] File Selected',
  ValidationFailed = '[File] The File Does Not Match The Template',
  CalendarSelected = '[Calendar] Calendar Selected',
}

export class FileSelected implements Action {
  readonly type = ActiveItemsActionTypes.FileSelected;
  constructor(public payload: DriveFile) {}
}

export class CalendarSelected implements Action {
  readonly type = ActiveItemsActionTypes.CalendarSelected;
  constructor(public payload: CalendarEntry) {}
}

export class ValidationFailed implements Action {
  readonly type = ActiveItemsActionTypes.ValidationFailed;
  constructor(public payload: ParseError) {}
}

export type ActiveItemsActions = FileSelected|ValidationFailed|CalendarSelected;
