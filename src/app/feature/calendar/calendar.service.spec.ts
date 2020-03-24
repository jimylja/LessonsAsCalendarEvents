import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CalendarApiService } from './calendar-api.service';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule } from '@angular/material';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { UserFacade} from '../user/user.facade';
import { StoreModule} from '@ngrx/store';


describe('CalendarService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      StoreModule.forRoot({}),
      HttpClientTestingModule, RouterTestingModule, MatSnackBarModule
    ],
    providers: [UserFacade],
    schemas: [NO_ERRORS_SCHEMA]
  }));

  it('should be created', () => {
    const service: CalendarApiService = TestBed.get(CalendarApiService);
    expect(service).toBeTruthy();
  });
});
