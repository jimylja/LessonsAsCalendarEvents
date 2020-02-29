import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from '../../../state/app.state';
import * as fromCalendar from './calendar.reducer';

export interface State extends fromRoot.AppState {
  calendar: fromCalendar.CalendarState;
}

const getCalendarFeatureState = createFeatureSelector<fromCalendar.CalendarState>('calendar');

export const getCurrentCalendar = createSelector(
  getCalendarFeatureState,
  state => state
);
