import { MatSnackBarConfig } from '@angular/material';

export interface SnackMessage extends MatSnackBarConfig {
  type: 'errorMessage' | 'exportMessage';
  redirectTo?: string;
}
