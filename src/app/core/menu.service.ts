import { Injectable } from '@angular/core';

export enum MenuLocations {navBarTop, navBarBottom, footer}
export interface MenuEntry {
  title: string;
  description?: string;
  icon?: string;
  route: string;
  location: MenuLocations[];
}

@Injectable({
  providedIn: 'root'
})

export class MenuService {

  constructor() { }

  private menuItems: MenuEntry[] = [
    {
      title: 'Календарі', description: 'список доступних календарів', icon: 'event_note', route: 'calendars',
      location: [MenuLocations.navBarTop]
    },
    {
      title: 'Таблиці', description: 'список доступних таблиць', icon: 'grid_on', route: 'files',
      location: [MenuLocations.navBarTop]},
    {
      title: 'Профіль', icon: 'person', route: 'user',
      location: [MenuLocations.navBarBottom, MenuLocations.footer]},
    {
      title: 'Загальні', icon: 'settings', route: 'user/settings',
      location: [MenuLocations.navBarBottom]},
    {
      title: 'Панель', icon: 'home', route: '/',
      location: [MenuLocations.footer]},
    {
      title: 'Інструкція', icon: 'help_outline', route: 'guide', location: [MenuLocations.navBarBottom]
    },
    {
      title: 'Експортувати', description: 'експорт уроків в календар', icon: 'double_arrow', route: 'export',
      location: [MenuLocations.navBarTop, MenuLocations.footer]
    },
  ];

  getMenu(location: MenuLocations): MenuEntry[] {
    return this.menuItems.filter(item => item.location.includes(location));
  }
}
