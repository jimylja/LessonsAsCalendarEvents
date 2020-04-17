import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {combineLatest, Observable} from 'rxjs';
import {ActionList, ActionsEntries, ItemAction} from './item/item.component';
import {DriveFile} from '../../../models/drive-file';
import {DriveApiService} from '../drive-api.service';
import {map} from 'rxjs/operators';
import {ActiveItemsFacade} from '../active-items.facade';
import {CalendarEntry} from '../../../models/calendar';
import {CalendarApiService} from '../calendar-api.service';

export interface ItemsData {
  activeItem: DriveFile|CalendarEntry;
  itemsList: DriveFile[]|CalendarEntry[];
}


@Component({
  selector: 'app-item-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {
  itemData$: Observable<ItemsData>;
  itemKey: 'calendar'|'file';
  itemDataFormService$: Observable<DriveFile[]|CalendarEntry[]>;
  itemActions: ActionsEntries[] = [];
  constructor(
    private driveApiService: DriveApiService,
    private calendarApiService: CalendarApiService,
    private activeItemsFacade: ActiveItemsFacade,
    private router: Router
  ) { }

  ngOnInit() {
    this.defineItem();
    this.itemData$ = combineLatest(
      this.activeItemsFacade.getActiveItem(this.itemKey),
      this.itemDataFormService$
    ).pipe(
      map(data => {
        return {
          activeItem: data[0],
          itemsList: data[1]
        };
      })
    );
  }

  itemSelect(data: DriveFile|CalendarEntry) {
    this.activeItemsFacade.selectItem(this.itemKey, data);
    this.router.navigate(['/']);
  }

  eventHandler({action, data}: ItemAction) {
    if (action === ActionList.itemSelected) {
      this.itemSelect(data);
    }
    switch (action) {
    case ActionList.itemSelected:
      this.itemSelect(data);
      break;
    case ActionList.clearCalendar:
      this.calendarApiService.clearCalendar((data as CalendarEntry).id);
      break;
  }
  }

  private defineItem() {
    switch (this.activeRoute) {
      case 'calendars':
        this.itemKey = 'calendar';
        this.itemDataFormService$ = this.calendarApiService.getCalendars();
        this.itemActions = [{name: ActionList.clearCalendar, description: 'Очистити календар', icon: 'delete_sweep'}];
        break;
      case 'files':
        this.itemKey = 'file';
        this.itemDataFormService$ = this.driveApiService.getDriveSheets();
    }
  }

  get activeRoute() {
    return this.router.url.slice(1);
  }

}

