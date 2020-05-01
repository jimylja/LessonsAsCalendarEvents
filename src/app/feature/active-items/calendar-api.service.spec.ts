import {TestBed, fakeAsync, tick} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {CalendarApiService} from './calendar-api.service';
import {RouterTestingModule} from '@angular/router/testing';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {UserFacade} from '../user/user.facade';
import {StoreModule} from '@ngrx/store';
import {environment} from '../../../environments/environment';
import {MessageService} from '../../core/message.service';
import {colorsResponse, eventListResponse, mockSheetData, dummyUserCalendars} from './mock/calendar.mock';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {mockSettings} from '../user/mock/user.mock';
import {of} from 'rxjs';

describe('CalendarApiService', () => {
  const colors = ['#a4bdfc', '#7ae7bf', '#dbadff', '#ff887c'];
  const activeCalendar = dummyUserCalendars[0];

  const dummyGetCalendarsResp = {
    items: [
      {id: 'cal1', timeZone: '+2', description: 'calendar1', summary: 'cal1', name: 'cal1', accessRole: 'owner', backgroundColor: '1'},
      {id: 'cal2', timeZone: '+2', description: 'calendar2', summary: 'cal2', name: 'cal2', accessRole: 'owner', backgroundColor: '2'},
      {id: 'cal3', timeZone: '+2', description: 'calendar3', summary: 'cal3', name: 'cal3', accessRole: 'owner', backgroundColor: '3'},
    ]
  };

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
    service = TestBed.inject(CalendarApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    service.ngOnDestroy();
    httpMock.verify();
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

  it('should get all user calendars', (done) => {
    service.getCalendars().subscribe(data => {
      expect(data).toEqual(dummyUserCalendars);
      done();
    });
    const request = httpMock.expectOne(`${environment.apiEndpoints.calendar}/users/me/calendarList?minAccessRole=writer`);
    expect(request.request.method).toEqual('GET');
    request.flush(dummyGetCalendarsResp);
  });

  it('should makes POST request to create event endpoint, with correct data', (done) => {
    service.exportLessonsToCalendar(mockSheetData, activeCalendar).subscribe();
    const request = httpMock.expectOne(`${environment.apiEndpoints.calendar}/calendars/${activeCalendar.id}/events`);
    mockSheetData.forEach(
      sheet => sheet.lessons.forEach(
        (lesson, lessonIdx) => {
          const timer = setTimeout(() => {
            expect(request.request.method).toEqual('POST');
            expect(request.request.body.summary).toEqual(`${sheet.lessons[lessonIdx].order} урок: ${sheet.title}`);
            request.flush(mockSheetData);
          }, 5000);
          clearTimeout(timer);
          done();
        }
      )
    );
    request.flush(mockSheetData);
  });
});
