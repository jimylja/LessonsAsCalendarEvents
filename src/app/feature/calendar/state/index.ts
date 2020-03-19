import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from '../../../state/app.state';
import {CalendarEntry} from '../../../models/calendar';

export interface State extends fromRoot.AppState {
  calendar: CalendarEntry;
}

const getCalendarFeatureState = createFeatureSelector<CalendarEntry>('calendar');

export const getCurrentCalendar = createSelector(
  getCalendarFeatureState,
  state => state
);
