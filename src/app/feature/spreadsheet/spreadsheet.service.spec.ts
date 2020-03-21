import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SpreadsheetService } from './spreadsheet.service';
import { RouterTestingModule } from '@angular/router/testing';
import {MatSnackBarModule} from '@angular/material';

describe('SpreadsheetService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, RouterTestingModule, MatSnackBarModule],
  }));

  it('should be created', () => {
    const service: SpreadsheetService = TestBed.get(SpreadsheetService);
    expect(service).toBeTruthy();
  });
});
