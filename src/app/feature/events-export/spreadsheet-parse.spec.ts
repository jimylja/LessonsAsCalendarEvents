import {TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {SpreadsheetParse} from './spreadsheet-parse';
import {dummyGridResponse, dummySheetData} from './mock/spreadsheet.mock';

describe('SpreadsheetParse', () => {
  let parse: SpreadsheetParse;
  const colors = ['#a4bdfc', '#7ae7bf', '#dbadff', '#ff887c'];

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA]
    });
    parse = new SpreadsheetParse({colors, sheets: dummyGridResponse.sheets});
  });

  it('should parse valid spreadsheet data', () => {
    const data = parse.parseSpreadsheet(dummyGridResponse.sheets);
    expect(data).toEqual({isValid: true, data: dummySheetData});
  });

  it('should parse invalid spreadsheet data', () => {
    const invalidSheets = Object.assign(dummyGridResponse).sheets;
    invalidSheets[0].data[0].rowData[0] = null;
    const data = parse.parseSpreadsheet(dummyGridResponse.sheets);
    expect(data).toEqual({isValid: false, data: {sheet: '5-В'}});
  });

});
