import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {CalendarEntry} from '../../../../models/calendar-entry';

@Component({
  selector: 'app-calendar-item',
  templateUrl: './calendar-item.component.html',
  styleUrls: ['./calendar-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarItemComponent implements OnInit {
  @Input() calendarItem: CalendarEntry;
  constructor() { }

  ngOnInit() {
  }

}
