import { MatSnackBarConfig } from '@angular/material';
import {Subject} from 'rxjs';
import {ExportStatus} from './calendar';

export interface MessageData {
  message: Subject<ExportStatus|string>;
  type?: 'defaultMessage' | 'exportMessage';
  title: string;
  displaySpinner?: boolean;
}

export interface SnackMessage extends MatSnackBarConfig {
  data: MessageData;
  redirectTo?: string;
}
