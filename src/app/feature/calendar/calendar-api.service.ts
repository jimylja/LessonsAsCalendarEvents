import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CalendarEntry } from '../../models/calendar-entry';
import { pluck } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CalendarApiService {
  private CALENDARS_API_URL = `https://www.googleapis.com/calendar/v3/users/me/calendarList`;
  constructor(private httpClient: HttpClient) {}

  getCalendars(): Observable<CalendarEntry[]> {
    return this.httpClient.get(this.CALENDARS_API_URL).pipe(
      pluck('items')
    );
  }


}
