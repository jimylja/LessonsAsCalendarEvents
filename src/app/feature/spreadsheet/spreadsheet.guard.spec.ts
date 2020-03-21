import { TestBed, inject } from '@angular/core/testing';

import { SpreadsheetGuard } from './spreadsheet.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore} from '@ngrx/store/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('SpreadsheetGuard', () => {
  const initialState = {
    user: {
      isLoggedIn: false,
      userProfile: {
        id: null
      }
    },
    calendar: {
      id: null,
      summary: null,
      description: null,
      timeZone: null,
      accessRole: null,
      backgroundColor: null,
    },
    file: {
      id: null,
      name: null
    }
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({initialState}), SpreadsheetGuard],
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    });
  });

  it('should ...', inject([SpreadsheetGuard], (guard: SpreadsheetGuard) => {
    expect(guard).toBeTruthy();
  }));
});
