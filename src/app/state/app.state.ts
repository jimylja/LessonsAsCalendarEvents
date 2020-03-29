import { CalendarEntry } from '../models/calendar';
import {userInitialState, UserState} from '../feature/user/state/user.reducer';
import {fileInitialState, FileState} from '../feature/file-picker/state/file.reducer';
import {calendarInitialState} from '../feature/calendar/state/calendar.reducer';
// Representation of the entire app state
// Extended by lazy loaded modules
export interface AppState {
  user: UserState;
  file: FileState;
  calendar: CalendarEntry;
}

export const appInitialState: AppState = {
  calendar: calendarInitialState,
  file: fileInitialState,
  user: userInitialState,
};
