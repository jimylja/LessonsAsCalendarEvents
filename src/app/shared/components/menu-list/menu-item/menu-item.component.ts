import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {MenuEntry} from '../../../menu-items';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuItemComponent {
  @Input() item: MenuEntry;
  @Input() entriesForDisplay: string[];
  constructor() { }
}
