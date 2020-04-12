import { CalendarActions, CalendarActionTypes } from './calendar.actions';
import { CalendarEntry } from '../../../models/calendar';

export const calendarInitialState: CalendarEntry = {
  id: null,
  name: null,
  description: null,
  timeZone: null,
  accessRole: null,
  backgroundColor: null,
};

export function reducer(state = calendarInitialState, action: CalendarActions): CalendarEntry {
  switch (action.type) {
    case CalendarActionTypes.CalendarSelected:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
