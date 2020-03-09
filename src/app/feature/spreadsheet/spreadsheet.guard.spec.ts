import { TestBed, async, inject } from '@angular/core/testing';

import { SpreadsheetGuard } from './spreadsheet.guard';

describe('SpreadsheetGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpreadsheetGuard]
    });
  });

  it('should ...', inject([SpreadsheetGuard], (guard: SpreadsheetGuard) => {
    expect(guard).toBeTruthy();
  }));
});
