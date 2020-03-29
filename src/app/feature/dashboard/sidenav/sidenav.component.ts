import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as fromFile from '../../file-picker/state';
import * as fromCalendar from '../../calendar/state';
import {combineLatest, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent implements OnInit {
  isSpreadsheetEnabled$: Observable<any>;
  constructor(private store: Store<fromFile.State>) { }
    menuItems = {
      mainMenu: [
        {title: 'Календарі', description: 'список доступних календарів', icon: 'event_note', route: 'calendars'},
        {title: 'Таблиці', description: 'список доступних таблиць', icon: 'grid_on', route: 'files'},
        {title: 'Експортувати', description: 'експорт уроків в календар', icon: 'double_arrow', route: 'spreadsheet'},
      ],
      footerMenu: [
        {title: 'Профіль', icon: 'person', route: 'user'},
        {title: 'Загальні', icon: 'settings', route: 'user/settings'},
      ]
    };
  ngOnInit() {
    this.isSpreadsheetEnabled$ = combineLatest(
      this.store.pipe(select(fromFile.getCurrentFile)),
      this.store.pipe(select(fromCalendar.getCurrentCalendar))
    ).pipe(
      map(data => (data.some(isItemsDefined)))
    );
    const isItemsDefined = item => (item === undefined) ? true :
      (item.hasOwnProperty('id')) ? item.id === null : true;
  }
}
