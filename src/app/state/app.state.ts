import { UserState } from '../user/state/user.reducer';
import { FileState } from '../file-picker/state/file.reducer';
// Representation of the entire app state
// Extended by lazy loaded modules
export interface State {
  user: UserState;
  file: FileState;
}
