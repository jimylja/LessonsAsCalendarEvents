import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { pluck, tap } from 'rxjs/operators';
import {Observable} from 'rxjs';
import {CalendarEntry} from '../../models/calendar-entry';


@Injectable({
  providedIn: 'root'
})
export class CalendarApiService {

  constructor(private httpClient: HttpClient) {}

  getCalendars(): Observable<CalendarEntry[]> {
    return this.httpClient.get('https://www.googleapis.com/calendar/v3/users/me/calendarList').pipe(
      tap( data => console.log(data)),
      pluck('items')
    );
  }


}
