import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {DriveFile} from 'src/app/models/drive-file';
import {CalendarEntry} from '../../../models/calendar';

export enum ActionList {itemSelected, clearCalendar}

export interface ItemAction {
  action: ActionList;
  data?: DriveFile|CalendarEntry;
}

export interface ActionsEntries {
  name: ActionList;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ListItemComponent {
  @Input() listItem: DriveFile | CalendarEntry;
  @Input() actions: ActionsEntries[];
  @Output() itemSelected = new EventEmitter<DriveFile|CalendarEntry>();
  @Output() itemAction = new EventEmitter<ItemAction>();
  itemActions = ActionList;
  constructor() { }

  emitAction(action, data?) {
    this.itemAction.emit({action, data});
  }
}
