import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { SpreadsheetService } from './spreadsheet.service';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule} from '@angular/material';
import { NO_ERRORS_SCHEMA} from '@angular/core';
import { UserFacade} from '../user/user.facade';
import { StoreModule} from '@ngrx/store';
import { CalendarApiService} from '../active-items/calendar-api.service';
import {dummyGridResponse, dummySheetData, failedSheet} from './mock/spreadsheet.mock';
import { environment} from '../../../environments/environment';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../../shared/shared.module';

describe('SpreadsheetService', () => {
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        SharedModule,
        HttpClientTestingModule, RouterTestingModule, MatSnackBarModule, NoopAnimationsModule
      ],
      providers: [
        CalendarApiService,
        UserFacade
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: SpreadsheetService = TestBed.get(SpreadsheetService);
    expect(service).toBeTruthy();
  });

  it('should fetch events-export data from server and convert it to Sheet interface', () => {
    const colors = ['#a4bdfc', '#7ae7bf', '#dbadff', '#ff887c'];
    const gridId = dummyGridResponse.spreadsheetId;
    const service: SpreadsheetService = TestBed.get(SpreadsheetService);
    const calendarService = TestBed.get(CalendarApiService);
    spyOn(calendarService, 'getCalendarColors').and.returnValue([colors]);
    service.getSpreadsheetData(gridId).subscribe(grid => expect(grid).toEqual(dummySheetData));
    const request = httpMock.expectOne(`${environment.apiEndpoints.spreadsheet}/${gridId}/?includeGridData=true`);
    expect(request.request.method).toEqual('GET');
    request.flush(dummyGridResponse);
  });

  it('should display error message', (done) => {
    const colors = ['#a4bdfc', '#7ae7bf', '#dbadff', '#ff887c'];
    const gridId = dummyGridResponse.spreadsheetId;
    const service: SpreadsheetService = TestBed.get(SpreadsheetService);
    const calendarService = TestBed.get(CalendarApiService);
    spyOn(calendarService, 'getCalendarColors').and.returnValue([colors]);
    service.getSpreadsheetData(gridId).subscribe(grid => { expect(grid).toEqual(null); });
    const request = httpMock.expectOne(`${environment.apiEndpoints.spreadsheet}/${gridId}/?includeGridData=true`);
    done();
    request.flush({sheets: [failedSheet]});


  });
});
