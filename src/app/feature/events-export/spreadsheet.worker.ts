import {SpreadsheetParse} from './spreadsheet-parse';

addEventListener('message', ({ data }) => {
  const parse = new SpreadsheetParse(data);
  const sheets = data.sheets;
  postMessage(parse.parseSpreadsheet(sheets), undefined);
});
