import {FileActions, FileActionTypes} from './file.actions';

// State for this feature (File)
export interface ParseError {
  sheet?: string;
  row?: number;
  column?: string;
  message?: string;
}

export interface FileState {
  id: string;
  name: string;
  webViewLink: string;
  modifiedTime: Date;
  validationError?: ParseError;
}

export const fileInitialState: FileState = {
  id: null,
  name: null,
  webViewLink: null,
  modifiedTime: null,
};

export function reducer(state = fileInitialState, action: FileActions): FileState {
  switch (action.type) {
    case FileActionTypes.FileSelected:
      return {
        ...state,
        ...action.payload,
        validationError: null
      };
    case FileActionTypes.ValidationFailed:
      return {
        ...state,
        validationError: action.payload
      };
    default:
      return state;
  }
}
