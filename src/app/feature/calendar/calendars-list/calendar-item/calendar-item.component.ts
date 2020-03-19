import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  EventEmitter,
  Output
} from '@angular/core';
import { CalendarEntry } from '../../../../models/calendar';


@Component({
  selector: 'app-calendar-item',
  templateUrl: './calendar-item.component.html',
  styleUrls: ['./calendar-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarItemComponent implements OnInit {
  @Input() calendarItem: CalendarEntry;
  @Output() calendarSelected = new EventEmitter<CalendarEntry>();
  constructor() { }

  ngOnInit() {
  }

  selectCalendar(calendar: CalendarEntry) {
    this.calendarSelected.emit(calendar);
  }
}
