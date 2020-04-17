import {ActiveItemsActions, ActiveItemsActionTypes} from './active-items.actions';
import {CalendarEntry} from '../../../models/calendar';
import {DriveFile} from '../../../models/drive-file';

// State for this feature (File)
export interface ParseError {
  sheet?: string;
  row?: number;
  column?: string;
  message?: string;
}

export interface FileState extends DriveFile {
  validationError?: ParseError;
}

export interface ActiveItemsState {
  activeFile: FileState;
  activeCalendar: CalendarEntry;
}

export const activeItemsInitialState: ActiveItemsState = {
  activeFile: null,
  activeCalendar: null
};

export function reducer(state = activeItemsInitialState, action: ActiveItemsActions): ActiveItemsState {
  switch (action.type) {
    case ActiveItemsActionTypes.FileSelected:
      return {
        ...state,
        activeFile: {
          ...action.payload,
          validationError: null
        }
      };
    case ActiveItemsActionTypes.CalendarSelected:
      return {
        ...state,
        activeCalendar: action.payload
      };
    case ActiveItemsActionTypes.ValidationFailed:
      return {
        ...state,
        activeFile: {
          ...state.activeFile,
          validationError: action.payload
        }
      };
    default:
      return state;
  }
}
