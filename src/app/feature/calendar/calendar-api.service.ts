import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, from, BehaviorSubject, Subject } from 'rxjs';
import { CalendarEntry, ExportStatus } from '../../models/calendar';
import { pluck, mergeMap, delay, tap, concatMap, map, takeUntil, switchMap } from 'rxjs/operators';
import { Sheet } from '../../models/sheet';
import * as moment from 'moment';
import { MessageService } from '../../core/message.service';

@Injectable({
  providedIn: 'root'
})
export class CalendarApiService implements OnDestroy {
  private CALENDAR_API_URL = `https://www.googleapis.com/calendar/v3`;
  private LESSONS_START_SCHEDULE = ['8:00', '8:55', '10:00', '11:05', '12:00', '12:55', '13:45'];
  private LESSONS_DURATION = 45;
  private readonly CALENDAR_COLORS = 'https://www.googleapis.com/calendar/v3/colors';
  private calendarColors$ = new BehaviorSubject<string[]>(null);
  exportEventsStatus$: BehaviorSubject<ExportStatus|null>;
  deleteEventStatus$: BehaviorSubject<string>;
  private onDestroy$ = new Subject();

  constructor(
    private httpClient: HttpClient,
    private messageService: MessageService) {}

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
    this.exportEventsStatus$ = new BehaviorSubject<ExportStatus|null>({
      exportSuccess: {total: 0, lastEvent: ''},
      exportFail: {total: 0, lastEvent: ''}
    });
    const lessons = events.map(
      classTab => this.generateEvents(classTab, calendar.timeZone)
    );
    this.messageService.showMessage({data: {
      message: this.exportEventsStatus$,
      type: 'exportMessage',
      title: 'Експорт уроків',
      displaySpinner: true
    }});
    from(lessons).pipe(
      concatMap(classLessons => from(classLessons).pipe(
        mergeMap(lesson => this.createEvent(lesson, calendar.id), 1)
      ))
    ).subscribe({
      complete: () => this.exportEventsStatus$.complete()
    });
  }

  /**
   * Returns array, that contain hex colors for google events
   * @returns - array of colors for events
   */
  getCalendarColors(): Observable<string[]> {
    if (this.calendarColors$.value === null) {
      this.fetchCalendarColors();
    }
    return this.calendarColors$.asObservable();
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
      delay(500),
      tap(resp => {
        this.updateExportStatus(resp);
      })
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
        const dateFormat = 'YYYY-MM-DD[T]HH:mm:ssZ';
        const lessonStartTime = `${moment(lesson.date).format('DD.MM.YYYY')}T${this.LESSONS_START_SCHEDULE[lesson.order]}`;
        const lessonDate = moment(lessonStartTime, 'DD.MM.YYYY HH:mm');
        const lessonEvent: GoogleEvent = {
          summary: `${lesson.order} урок: ${classTab.title}`,
          location: lesson.location,
          description: `№ ${lesson.number}: <strong>${lesson.topic}</strong>, ${lesson.hwPractice},${lesson.hwTheory}`,
          start: {
            dateTime: lessonDate.format(dateFormat),
            timeZone
          },
          end: {
            dateTime: lessonDate.clone().add(this.LESSONS_DURATION, 'minute').format(dateFormat),
            timeZone
          },
        };
        if (classTab.colorId) { lessonEvent.colorId = String(+classTab.colorId + 1); }
        if (classTab.hasOwnProperty('attendeesEmail')) {
          Object.defineProperty(lessonEvent, 'attendees', {
            value: [{email: `${classTab.attendeesEmail}`}],
          });
        }
        return lessonEvent;
      }
    );
  }

  /**
   * Update message for export events process,
   * that contains info about succeed and failed requests
   * @params - response from server for create event request
   */
  private updateExportStatus(resp: HttpResponse<any>): void {
    const curStatus = this.exportEventsStatus$.value;
    if (resp.status === 200) {
      this.exportEventsStatus$.next({
        ...curStatus,
        exportSuccess: {
          total: curStatus.exportSuccess.total + 1,
          lastEvent: resp.body.summary
        }});
    } else {
      this.exportEventsStatus$.next({
        ...curStatus,
        exportFail: {
          total: curStatus.exportFail.total + 1,
          lastEvent: resp.body.summary
        }
      });
    }
  }

  /**
   * Method fetches color values for google events
   */
  private fetchCalendarColors(): void {
    this.httpClient.get(this.CALENDAR_COLORS).pipe(
      map((data: {event: GoogleColor[]}) => {
        return Object.entries(data.event).map(
          color => color[1].background
        );
      }),
      takeUntil(this.onDestroy$)
    ).subscribe((colors: any) => this.calendarColors$.next(colors));
  }

  /**
   * Method fetches all events from calendar
   * @param calendarId id of google calendar
   * @returns list of events for calendar
   */
   getCalendarEvents(calendarId: string): Observable<any> {
      return this.httpClient.get(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?&maxResults=2500`);
    }

  /**
   * Method fetches all events from calendar
   * @param calendarId id of google calendar
   * @param eventId id of event, that should be deleted
   * @returns result of request
   */
  private deleteEvent(calendarId: string, eventId: string): Observable<boolean> {
    return this.httpClient.delete(
      `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events/${eventId}`,
      {observe: 'response'}).pipe(
      map(resp => Boolean(resp.body))
    );
  }

  /**
   * Method deletes all events from calendar
   * @param calendarId id of google calendar
   */
  clearCalendar(calendarId: string): void {
    let deletedEvents = 0;
    this.deleteEventStatus$ = new BehaviorSubject<string>('Видалено: 0');
    this.messageService.showMessage({data: {message: this.deleteEventStatus$, title: 'Очищення календаря', displaySpinner: true}});
    this.getCalendarEvents(calendarId).pipe(
      switchMap((events: {items: Array<any>}) => {
        return from(events.items).pipe(
          mergeMap(event =>
            this.deleteEvent(calendarId, event.id).pipe(
              map(data => {
                if (!data) {
                  deletedEvents++;
                  this.deleteEventStatus$.next(`Видалено: ${deletedEvents}`);
                }
              })
            ), 1
          )
        );
      })
    ).subscribe({complete: () => {
      this.deleteEventStatus$.complete();
    }});
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
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
  colorId?: string;
}

export interface GoogleColor {
  [id: string]: {
    foreground: string
    background: string;
  };
}
