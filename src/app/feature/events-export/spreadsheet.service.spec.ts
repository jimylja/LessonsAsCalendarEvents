import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SpreadsheetService } from './spreadsheet.service';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NO_ERRORS_SCHEMA} from '@angular/core';
import { UserFacade} from '../user/user.facade';
import { StoreModule} from '@ngrx/store';
import { CalendarApiService} from '../active-items/calendar-api.service';
import { dummyGridResponse, dummySheetData, failedSheet } from './mock/spreadsheet.mock';
import { environment} from '../../../environments/environment';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../../shared/shared.module';
import { of } from 'rxjs';

describe('SpreadsheetService', () => {
  let httpMock: HttpTestingController;
  let service: SpreadsheetService;
  let calendarService: CalendarApiService;
  const colors = ['#a4bdfc', '#7ae7bf', '#dbadff', '#ff887c'];
  const gridId = dummyGridResponse.spreadsheetId;

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
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(SpreadsheetService);
    calendarService = TestBed.inject(CalendarApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch events-export data from server and convert it to Sheet interface', (done) => {
    const spy = spyOn(service, 'getSpreadsheetData').and.callThrough();
    spyOn(calendarService, 'getCalendarColors').and.returnValue(of(colors));
    service.getSpreadsheetData(gridId).subscribe(grid => {
      expect(grid).toEqual(dummySheetData);
      done();
    });
    const request = httpMock.expectOne(`${environment.apiEndpoints.spreadsheet}/${gridId}/?includeGridData=true`);
    expect(request.request.method).toEqual('GET');
    expect(spy).toHaveBeenCalled();
    request.flush(Object.assign({}, dummyGridResponse));
  });

  it('should display error message', (done) => {
    const spy = spyOn(service, 'getSpreadsheetData').and.callThrough();
    spyOn(calendarService, 'getCalendarColors').and.returnValue(of(colors));
    service.getSpreadsheetData(gridId).subscribe(
      data => {
        expect(data).toEqual(null);
        done();
    });
    const request = httpMock.expectOne(`${environment.apiEndpoints.spreadsheet}/${gridId}/?includeGridData=true`);
    expect(spy).toHaveBeenCalled();
    request.flush({sheets: [failedSheet]});
  });
});
