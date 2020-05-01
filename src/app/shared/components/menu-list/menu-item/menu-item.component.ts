import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MenuEntry } from 'src/app/core/menu.service';

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
