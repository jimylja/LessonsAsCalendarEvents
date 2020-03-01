import { CalendarActions, CalendarActionTypes } from './calendar.actions';
import { CalendarEntry } from '../../../models/calendar-entry';

const initialState: CalendarEntry = {
  id: null,
  summary: null,
  description: null,
  timeZone: null,
  accessRole: null,
  backgroundColor: null,
};

export function reducer(state = initialState, action: CalendarActions): CalendarEntry {
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
