import { FileActions, FileActionTypes } from './file.actions';

// State for this feature (File)
export interface FileState {
  id: string;
  name: string;
}

const initialState: FileState = {
  id: null,
  name: null
};

export function reducer(state = initialState, action: FileActions): FileState {
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
