import { Component } from '@angular/core';
import { MenuService, MenuLocations } from '../../../core/menu.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  footerMenu = this.menuItems.getMenu(MenuLocations.footer);
  constructor( private menuItems: MenuService) {}
}
