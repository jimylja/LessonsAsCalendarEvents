import { FileActions, FileActionTypes } from './file.actions';

// State for this feature (File)
export interface FileState {
  id: string;
  name: string;
}

export const fileInitialState: FileState = {
  id: null,
  name: null
};

export function reducer(state = fileInitialState, action: FileActions): FileState {
  switch (action.type) {
    case FileActionTypes.FileSelected:
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name
      };
    default:
      return state;
  }
}
