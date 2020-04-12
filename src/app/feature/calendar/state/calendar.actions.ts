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

export type CalendarActions = CalendarSelected;
