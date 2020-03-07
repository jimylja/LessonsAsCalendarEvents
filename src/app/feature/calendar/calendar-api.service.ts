import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { CalendarEntry } from '../../models/calendar-entry';
import { pluck, mergeMap, delay } from 'rxjs/operators';
import { Sheet } from '../../models/sheet';
import * as moment from 'moment';

export interface GoogleEvent {
  summary: string;
  description: string;
  location: string;
  start: {
    dateTime: string;
    timeZone: string;
  };
  end: {
    dateTime: string;
    timeZone: string;
  };
  attendees?: [{email: string}];
  colorId?: number;
}

@Injectable({
  providedIn: 'root'
})
export class CalendarApiService {
  private CALENDAR_API_URL = `https://www.googleapis.com/calendar/v3`;
  private LESSONS_START_SCHEDULE = ['8:00', '8:55', '10:00', '11:05', '12:00', '12:55', '13:45'];
  private LESSONS_DURATION = 45;
  constructor(private httpClient: HttpClient) {}

  /**
   * Method makes request, that takes list of user calendars
   * @returns array, list of calendars
   */
  getCalendars(): Observable<CalendarEntry[]> {
    return this.httpClient.get(`${this.CALENDAR_API_URL}/users/me/calendarList`).pipe(
      pluck('items')
    );
  }

  /**
   * Method creates events in Google Calendar based on spreadsheet data
   * @param events - spreadsheet tabs, where rows represents lessons data
   * @param calendar - calendar that will contain new events
   */
  exportLessonsToCalendar(events: Sheet[], calendar: CalendarEntry): void {
    const lessons = events.map(
      classTab => this.generateEvents(classTab, calendar.timeZone)
    );
    lessons.forEach(
      classLessons => { from(classLessons).pipe(
        mergeMap(
          lesson => this.createEvent(lesson, calendar.id), 2
        )
      ).subscribe();
      }
    );
  }

  /**
   * Method makes request, that creates new event in Google Calendar
   * @returns response
   * @param event - Google Event object
   * @param calendarId - id of google calendar
   */
  private createEvent(event: GoogleEvent, calendarId: string): Observable<any> {
    return this.httpClient.post(
      `${this.CALENDAR_API_URL}/calendars/${calendarId}/events`,
      event,
      {observe: 'response'}
    ).pipe(
      delay(100)
    );
  }

  /**
   * Method generate array of event objects in Google Calendar format
   * @returns array of of Google Calendar events
   * @param classTab - Google Spreadsheet tab with events data
   * @param timeZone - time zone for new events
   */
  private generateEvents(classTab: Sheet, timeZone: string): Array<GoogleEvent> {
    return classTab.lessons.map(
      lesson => {
        const lessonDate = moment(`${lesson.date}T${this.LESSONS_START_SCHEDULE[lesson.order]}`, 'DD.MM.YYYY HH:mm');
        return {
          summary: `${lesson.order} урок: ${classTab.title}`,
          location: lesson.location,
          description: `№ ${lesson.number}: <strong>${lesson.topic}</strong>, ${lesson.hwPractice},${lesson.hwTheory}`,
          start: {
            dateTime: lessonDate.format(moment.HTML5_FMT.DATETIME_LOCAL_SECONDS),
            timeZone
          },
          end: {
            dateTime: lessonDate.clone().add(this.LESSONS_DURATION, 'minute').format(moment.HTML5_FMT.DATETIME_LOCAL_SECONDS),
            timeZone
          },
          attendees: [{email: `${classTab.attendeesEmail}`}],
          colorId: Number(Object.values(classTab.color)[0])
        };
      }
    );
  }
}
