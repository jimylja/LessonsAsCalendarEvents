import { TestBed, inject } from '@angular/core/testing';

import { SpreadsheetGuard } from './spreadsheet.guard';
import { RouterTestingModule } from '@angular/router/testing';


describe('SpreadsheetGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpreadsheetGuard],
      imports: [RouterTestingModule]
    });
  });

  it('should ...', inject([SpreadsheetGuard], (guard: SpreadsheetGuard) => {
    expect(guard).toBeTruthy();
  }));
});
