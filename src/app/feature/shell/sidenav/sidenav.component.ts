import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MenuService, MenuLocations} from '../../../core/menu.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent {
  constructor( private menuItems: MenuService) {}
  navMenuTop = this.menuItems.getMenu(MenuLocations.navBarTop);
  navMenuBottom = this.menuItems.getMenu(MenuLocations.navBarBottom);
}
