import { Component, OnInit } from '@angular/core';
import { CalendarApiService } from '../calendar-api.service';
import {Observable} from 'rxjs';
import {CalendarEntry} from '../../../models/calendar-entry';

@Component({
  selector: 'app-calendars-list',
  templateUrl: './calendars-list.component.html',
  styleUrls: ['./calendars-list.component.scss']
})
export class CalendarsListComponent implements OnInit {
  calendarList$: Observable<CalendarEntry[]>
  constructor( private calendar: CalendarApiService) { }

  ngOnInit() {
    this.calendarList$ = this.calendar.getCalendars();
  }

}
