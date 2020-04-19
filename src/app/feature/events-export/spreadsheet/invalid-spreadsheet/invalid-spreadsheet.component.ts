import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FileState} from '../../../active-items/state/active-items.reducer';

@Component({
  selector: 'app-invalid-spreadsheet',
  templateUrl: './invalid-spreadsheet.component.html',
  styleUrls: ['./invalid-spreadsheet.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class InvalidSpreadsheetComponent {
  @Input() file: FileState;
  constructor() {}
}
