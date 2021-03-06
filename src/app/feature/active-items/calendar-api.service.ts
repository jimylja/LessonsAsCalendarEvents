import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, from, BehaviorSubject, Subject, iif } from 'rxjs';
import { CalendarEntry, ExportStatus } from '../../models/calendar';
import { pluck, mergeMap, delay, tap, concatMap, map, switchMap, finalize, take, retryWhen, catchError } from 'rxjs/operators';
import { Sheet } from '../../models/sheet';
import * as moment from 'moment';
import { MessageService } from '../../core/message.service';
import { environment } from '../../../environments/environment';
import { UserFacade } from '../user/user.facade';
import { AuthService } from '../user/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CalendarApiService implements OnDestroy {
  static readonly CALENDAR_API = environment.apiEndpoints.calendar;
  static readonly COLORS_ENDPOINT = `${CalendarApiService.CALENDAR_API}/colors`;
  static readonly LIST_ENDPOINT = `${CalendarApiService.CALENDAR_API}/users/me/calendarList?minAccessRole=writer`;
  static readonly CALENDAR_ENDPOINT = `${CalendarApiService.CALENDAR_API}/calendars`;

  private lessonsStartSchedule = environment.settings.lessonsStartSchedule;
  private lessonsDuration = environment.settings.lessonDuration;
  private calendarColors$ = new BehaviorSubject<string[]>(null);
  private exportEventsStatus$: BehaviorSubject<ExportStatus|null>;
  private deleteEventStatus$: BehaviorSubject<string>;
  private onDestroy$ = new Subject();

  constructor(private userFacade: UserFacade,
              private httpClient: HttpClient,
              private auth: AuthService,
              private messageService: MessageService) {}

  /**
   * Method rename's 'summary' key of object into 'name'
   * @params obj - object with calendar entries
   * @returns object with renamed property key
   */
  static renameSummaryKey(obj) {
    const res = Object.assign({}, obj, {name: obj.summary});
    delete res.summary;
    return res;
  }

  /**
   * Method makes request, that takes list of user calendars
   * @returns array, list of calendars
   */
  getCalendars(): Observable<CalendarEntry[]> {
    return this.httpClient.get(CalendarApiService.LIST_ENDPOINT).pipe(
      retryWhen(this.auth.retryWithNewToken()),
      catchError(() => { throw Error('Invalid Credentials'); }),
      pluck('items'),
      map((data: CalendarEntry[]) => data.map(CalendarApiService.renameSummaryKey))
    );
  }

  /**
   * Method creates events in Google Calendar based on events-export data
   * @param events - events-export tabs, where rows represents lessons data
   * @param calendar - calendar that will contain new events
   */
  exportLessonsToCalendar(events: Sheet[], calendar: CalendarEntry): Observable<void> {
    this.exportEventsStatus$ = new BehaviorSubject<ExportStatus|null>({
      exportSuccess: {total: 0, lastEvent: ''},
      exportFail: {total: 0, lastEvent: ''}
    });
    const lessons = events.map(
      classTab => this.generateEvents(classTab, calendar.timeZone)
    );
    this.displayExportMessage(this.exportEventsStatus$, 'Експорт уроків', 'exportMessage');

    return this.userFacade.settings$.pipe(
      take(1),
      tap(this.getActualUserSettings),
      switchMap(() => from(lessons).pipe(
        concatMap(classLessons => from(classLessons).pipe(
          mergeMap(lesson => this.createEvent(lesson, calendar.id), 1)
        )),
        finalize(() => {
          this.userFacade.updateStatistic( {
            calendar: calendar.name,
            exportFail: this.exportEventsStatus$.value.exportFail.total,
            exportSuccess: this.exportEventsStatus$.value.exportSuccess.total
          });
          this.exportEventsStatus$.complete();
        })
      )),
    );
  }

  /**
   * Returns array, that contain hex colors for google events
   * @returns - array of colors for events
   */
  getCalendarColors(): Observable<string[]> {
    return this.calendarColors$.pipe(
      mergeMap(colors =>
        iif(() => colors === null, this.fetchCalendarColors(), this.calendarColors$.asObservable())
      )
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
      `${CalendarApiService.CALENDAR_ENDPOINT}/${calendarId}/events`,
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
        const lessonStartTime = `${moment(lesson.date).format('DD.MM.YYYY')}T${this.lessonsStartSchedule[lesson.order]}`;
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
            dateTime: lessonDate.clone().add(this.lessonsDuration, 'minute').format(dateFormat),
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
  private fetchCalendarColors(): Observable<string[]> {
    return this.httpClient.get(CalendarApiService.COLORS_ENDPOINT).pipe(
      map((data: {event: GoogleColor[]}) => {
        const colors: string[] = Object.entries(data.event).map(
          color => String(color[1].background)
        );
        this.calendarColors$.next(colors);
        return colors;
      }),
      retryWhen(this.auth.retryWithNewToken()),
      catchError(() => { throw Error('Invalid Credentials'); }),
    );
  }

  /**
   * Method fetches all events from calendar
   * @param calendarId id of google calendar
   * @returns list of events for calendar
   */
   getCalendarEvents(calendarId: string): Observable<any> {
      return this.httpClient.get(`${CalendarApiService.CALENDAR_ENDPOINT}/${calendarId}/events?&maxResults=2500`);
    }

  /**
   * Method fetches all events from calendar
   * @param calendarId id of google calendar
   * @param eventId id of event, that should be deleted
   * @returns result of request
   */
  private deleteEvent(calendarId: string, eventId: string): Observable<boolean> {
    return this.httpClient.delete(
      `${CalendarApiService.CALENDAR_ENDPOINT}/${calendarId}/events/${eventId}`,
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
    this.displayExportMessage(this.deleteEventStatus$, 'Очищення календаря');
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

  private getActualUserSettings(settings): void {
    this.lessonsDuration = settings.lessonDuration;
    this.lessonsStartSchedule = settings.lessonsStartSchedule;
  }

  private displayExportMessage(message, title, type?): void {
    this.messageService.showMessage({
      data: {
        message,
        type,
        title,
        displaySpinner: true},
      duration: 0
    });
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
