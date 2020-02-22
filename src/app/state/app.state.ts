import { UserState } from '../feature/user/state/user.reducer';
import { FileState } from '../feature/file-picker/state/file.reducer';
// Representation of the entire app state
// Extended by lazy loaded modules
export interface State {
  user: UserState;
  file: FileState;
}
