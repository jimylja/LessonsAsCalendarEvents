import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MenuItems, MenuLocations} from '../../../shared/menu-items';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent {
  constructor() {}
  menuItems = new MenuItems();
  navMenuTop = this.menuItems.getMenu(MenuLocations.navBarTop);
  navMenuBottom = this.menuItems.getMenu(MenuLocations.navBarBottom);
}
