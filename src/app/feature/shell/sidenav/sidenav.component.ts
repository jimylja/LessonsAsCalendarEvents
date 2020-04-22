import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ActiveItemsState} from '../../active-items/state/active-items.reducer';
import {ActiveItemsFacade} from '../../active-items/active-items.facade';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent implements OnInit {
  isSpreadsheetEnabled$: Observable<any>;

  constructor(private activeItemsFacade: ActiveItemsFacade) {}

  menuItems = {
    mainMenu: [
      {title: 'Календарі', description: 'список доступних календарів', icon: 'event_note', route: 'calendars'},
      {title: 'Таблиці', description: 'список доступних таблиць', icon: 'grid_on', route: 'files'},
      {title: 'Експортувати', description: 'експорт уроків в календар', icon: 'double_arrow', route: 'export'},
    ],
    footerMenu: [
      {title: 'Профіль', icon: 'person', route: 'user'},
      {title: 'Загальні', icon: 'settings', route: 'user/settings'},
      {title: 'Інструкція', icon: 'help_outline', route: 'guide'},
    ]
  };

  ngOnInit() {
    this.isSpreadsheetEnabled$ = this.activeItemsFacade.activeItems$.pipe(
      map((activeItems: ActiveItemsState) => Boolean(activeItems.activeCalendar && activeItems.activeFile))
    );
  }
}
