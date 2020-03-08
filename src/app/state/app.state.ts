import { UserState } from '../feature/user/state/user.reducer';
import { FileState } from '../feature/file-picker/state/file.reducer';
import {CalendarEntry} from '../models/calendar';

// Representation of the entire app state
// Extended by lazy loaded modules
export interface AppState {
  user: UserState;
  file: FileState;
  calendar: CalendarEntry;
}
