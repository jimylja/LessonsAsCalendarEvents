import { Injectable } from '@angular/core';
import { combineLatest, Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { pluck, map } from 'rxjs/operators';
import { Lesson, Sheet } from '../../models/sheet';
import { CalendarApiService } from '../calendar/calendar-api.service';
import {environment} from '../../../environments/environment';

export interface RgbObj {
  red: number;
  blue: number;
  green: number;
}

@Injectable({
  providedIn: 'root'
})
export class SpreadsheetService {
  static readonly SPREADSHEET_API = environment.apiEndpoints.spreadsheet;
  private keys = ['number', 'date', 'order', 'location', 'topic', 'hwTheory', 'hwPractice'];

  constructor(private httpClient: HttpClient, private calendarService: CalendarApiService) { }

  static convertFromSerialToMoment(excelDate: number): Date {
    const unixTimestamp = (excelDate - 25569) * 86400;
    return new Date(unixTimestamp * 1000);
  }

  public getSpreadsheetData(id: string): Observable<Sheet[]> {
    return combineLatest(
      this.fetchSpreadsheet(id),
      this.calendarService.getCalendarColors()
    ).pipe(
      map(([lessons, colors]) => {
        return lessons.map(
          sheet => {
            const tabColor = sheet.properties.tabColor;
            return {
              title: sheet.properties.title,
              colorId: tabColor ? this.getSimilarColor(this.convertToRgb(sheet.properties.tabColor), colors) : null,
              attendeesEmail: sheet.data[0].rowData[0].values[2].formattedValue,
              lessons: this.getRowValues(sheet.data[0].rowData.slice(3))
            };
          }
        );
      })
    );
  }

  /**
   * Method makes request, that takes data that contains in all sheets
   * @params spreadsheetId - id of spreadsheet
   * @returns object, that contain array of data for each table sheet
   */
  private fetchSpreadsheet(spreadsheetId: string): Observable<any> {
    return this.httpClient.get(`${SpreadsheetService.SPREADSHEET_API}/${spreadsheetId}/?includeGridData=true`).pipe(
      pluck('sheets')
    );
  }

  /**
   * Method takes data from spreadsheet rows and generates lesson for each table row
   * @params rowData - array, contains data of rows from table sheet
   * @returns array of lessons
   */
  private getRowValues(rowsData): Array<Lesson> {
    return rowsData.map(
      row => {
        const lesson = {};
        row.values.forEach(
          (value, index) => {
            const isCellWithDate = index === 1;
            if (!isCellWithDate) {
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

  /**
   * The returns object that contains values of color channels in range from 0 to 255
   * @params - rgb object that contains values of color channels in range from 0 to 1
   * @returns - color object, that contains values of color channels in range from 0 to 255
   */
  private convertToRgb(rgb: any): RgbObj {
    const color = {...rgb};
    const channels = ['red', 'green', 'blue'];
    channels.forEach( chanel => {
      if (color.hasOwnProperty(chanel)) {
        color[chanel] = color[chanel] * 255;
      } else {
        color[chanel] = 0;
      }
    });
    return color;
  }

  /**
   * Methods search similar color to pipe value from google events palette
   * @params color - rgb object of color
   * @returns - index of similar color in google events palette
   */
  private getSimilarColor(color: RgbObj, colors: string[]): number {
    let similarRgb = this.hexToRgb(colors[0]);
    return colors.reduce(
      (acc, cur, idx) => {
        const curRgb = this.hexToRgb(cur);
        if ( this.calcColorsSimilarity(color, curRgb) < this.calcColorsSimilarity(color, similarRgb)) {
          similarRgb = curRgb;
          return idx;
        } else { return acc; }
      }, 0);
  }

 /**
  * Methods convert color from hex to rgb
  * @params hex - color, represented in hex string
  * @returns - rgb object of color
  */
  private hexToRgb(hex: string): RgbObj {
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
      const c = hex.substring(1).split('');
      const hexArr = [c[0] + c[1], c[2] + c[3], c[4] + c[5]];
      const convertHexUnitTo256 = (hexStr) => parseInt(hexStr.repeat(2 / hexStr.length), 16);
      const [red, green, blue] = hexArr.map(convertHexUnitTo256);
      return {red, green , blue};
    }
  }

  /**
   * Methods takes two colors and calculate the value of similarity between them
   * @params color1 - color, that need to be compared
   * @params color2 - color, that need to be compared
   * @returns - numeric value of similarity between colors
   */
  private calcColorsSimilarity(color1: RgbObj, color2: RgbObj): number {
    const c1 = [color1.red, color1.green, color1.blue];
    const c2 = [color2.red, color2.green, color2.blue];
    const distance = c1.reduce((dist, cur, idx) => {
      return dist + Math.pow(cur - c2[idx], 2);
    }, 0);
    return Math.sqrt(distance);
  }
}
