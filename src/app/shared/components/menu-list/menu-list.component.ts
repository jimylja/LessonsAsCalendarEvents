import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {MenuEntry} from '../../menu-items';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuListComponent {
  @Input() menuList: MenuEntry[];
  @Input() entriesForDisplay: string[];
  constructor() { }
}
