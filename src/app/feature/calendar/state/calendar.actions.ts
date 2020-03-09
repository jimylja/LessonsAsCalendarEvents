import { Action } from '@ngrx/store';
import { CalendarEntry } from '../../../models/calendar';

export enum CalendarActionTypes {
  CalendarSelected = '[Calendar] Calendar Selected',
}

export class CalendarSelected implements Action {
  readonly type = CalendarActionTypes.CalendarSelected;
  constructor( public payload: CalendarEntry) {
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

export type CalendarActions = CalendarSelected;
// |LoggedSuccessful
// |LoggedFailed;
