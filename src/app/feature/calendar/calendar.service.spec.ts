import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CalendarApiService } from './calendar-api.service';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule } from '@angular/material';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CalendarService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, RouterTestingModule, MatSnackBarModule],
    schemas: [NO_ERRORS_SCHEMA]
  }));

  it('should be created', () => {
    const service: CalendarApiService = TestBed.get(CalendarApiService);
    expect(service).toBeTruthy();
  });
});
