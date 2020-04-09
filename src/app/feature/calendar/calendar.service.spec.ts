import {TestBed, fakeAsync, tick} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {CalendarApiService} from './calendar-api.service';
import {RouterTestingModule} from '@angular/router/testing';
import {MatSnackBarModule} from '@angular/material';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {UserFacade} from '../user/user.facade';
import {StoreModule} from '@ngrx/store';
import {environment} from '../../../environments/environment';
import {MessageService} from '../../core/message.service';
import {colorsResponse, eventListResponse, mockSheetData, dummyUserCalendars} from './mock/calendar.mock';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {mockSettings} from '../user/mock/user.mock';
import {of} from 'rxjs';


describe('CalendarService', () => {
  const colors = ['#a4bdfc', '#7ae7bf', '#dbadff', '#ff887c'];
  const activeCalendar = dummyUserCalendars[0];
  let service: CalendarApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        HttpClientTestingModule, RouterTestingModule, MatSnackBarModule, NoopAnimationsModule
      ],
      providers: [
        UserFacade,
        { provide: MessageService, useValue: {showMessage: () => {}} },
        { provide: UserFacade, useValue: {settings$: of(mockSettings), updateStatistic: () => {}}}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
    service = TestBed.get(CalendarApiService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    service.ngOnDestroy();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get list of colors', fakeAsync(() => {
    service.getCalendarColors().subscribe(resp => expect(resp).toEqual(colors));
    const request = httpMock.expectOne(`${environment.apiEndpoints.calendar}/colors`);
    expect(request.request.method).toEqual('GET');
    tick();
    request.flush(colorsResponse);
  }));

  it('should delete all events from calendar', fakeAsync(() => {
    service.clearCalendar(activeCalendar.id);
    tick();
    const request = httpMock.expectOne(`${environment.apiEndpoints.calendar}/calendars/${activeCalendar.id}/events?&maxResults=2500`);
    expect(request.request.method).toEqual('GET');
    request.flush(eventListResponse[activeCalendar.id]);
    eventListResponse[activeCalendar.id].items.forEach(
      event => {
        const req = httpMock.expectOne(`${environment.apiEndpoints.calendar}/calendars/${activeCalendar.id}/events/${event.id}`);
        expect(req.request.method).toEqual('DELETE');
        req.flush(null);
      }
    );
  }));

  it('should get all user calendars', fakeAsync(() => {
    service.getCalendars().subscribe();
    tick();
    const request = httpMock.expectOne(`${environment.apiEndpoints.calendar}/users/me/calendarList?minAccessRole=writer`);
    expect(request.request.method).toEqual('GET');
  }));

  it('should makes POST request to create event endpoint, with correct data', fakeAsync(() => {
    service.exportLessonsToCalendar(mockSheetData, activeCalendar);
    mockSheetData.forEach(
      sheet => sheet.lessons.forEach(
        (lesson, lessonIdx) => {
          const timer = setTimeout(() => {
            const request = httpMock.expectOne(`${environment.apiEndpoints.calendar}/calendars/${activeCalendar.id}/events`, );
            expect(request.request.method).toEqual('POST');
            expect(request.request.body.summary).toEqual(`${sheet.lessons[lessonIdx].order} урок: ${sheet.title}`);
            tick();
            request.flush(mockSheetData);
            }, 500);
          clearTimeout(timer);
        }
      )
    );
  }));
});
