import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { pluck, map } from 'rxjs/operators';
import { Lesson, Sheet } from '../../models/sheet';

@Injectable({
  providedIn: 'root'
})
export class SpreadsheetService {
  private keys = ['number', 'date', 'order', 'location', 'topic', 'hwTheory', 'hwPractice'];
  private readonly API_URL: string = 'https://sheets.googleapis.com/v4/spreadsheets';

  constructor(private httpClient: HttpClient) { }

  static convertFromSerialToMoment(excelDate: number): Date {
    const unixTimestamp = (excelDate - 25569) * 86400;
    return new Date(unixTimestamp * 1000);
  }

  private getRowValues(rowsData): Array<Lesson> {
    return rowsData.map(
      row => {
        const lesson = {};
        row.values.forEach(
          (value, index) => {
            if (index !== 1) {
              lesson[this.keys[index]] = value.formattedValue;
            } else {
              lesson[this.keys[index]] = SpreadsheetService.convertFromSerialToMoment(value.effectiveValue.numberValue);
            }
          }
        );
        return lesson;
      }
    );
  }

  public getSpreadsheetData(id: string): Observable<Sheet[]> {
    return this.fetchSpreadsheet(id).pipe(
      map(data => {
        return data.map(
          sheet => {
            return {
              title: sheet.properties.title,
              color: sheet.properties.tabColor,
              attendeesEmail: sheet.data[0].rowData[0].values[2].formattedValue,
              lessons: this.getRowValues(sheet.data[0].rowData.slice(3))
            };
          }
        );
      })
    );
  }

  private fetchSpreadsheet(spreadsheetId: string): Observable<any> {
    return this.httpClient.get(this.API_URL + '/' + spreadsheetId + '/?includeGridData=true').pipe(
      pluck('sheets')
    );
  }
}
