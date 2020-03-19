import { ChangeDetectionStrategy, Component, OnInit, Input } from '@angular/core';
import { CalendarEntry } from '../../../../models/calendar-entry';

@Component({
  selector: 'app-active-calendar-widget',
  templateUrl: './active-calendar-widget.component.html',
  styleUrls: ['./active-calendar-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActiveCalendarWidgetComponent implements OnInit {
  @Input() activeCalendar: CalendarEntry;
  constructor() { }

  ngOnInit() {
  }

}
