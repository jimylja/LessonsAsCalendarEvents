import {Lesson, Sheet} from '../../models/sheet';

interface RgbObj {
  red: number;
  blue: number;
  green: number;
}
export enum LessonProps {number, date, order, location, topic, hwTheory, hwPractice}

interface ParseError {
  sheet?: string;
  row?: number;
  column?: string;
  message?: string;
}

export interface WorkerResp {
  isValid: boolean;
  data: Sheet[] | ParseError;
}

export class SpreadsheetParse {
  colors: string[];
  parseError: ParseError = {};
  constructor(data) {
    console.log(data);
    this.colors = data.colors;
  }

  static convertFromSerialToMoment(excelDate: number): Date {
      const unixTimestamp = (excelDate - 25569) * 86400;
      return new Date(unixTimestamp * 1000);
    }

  parseSpreadsheet(sheets: object[]): WorkerResp {
    const response: WorkerResp = {isValid: true, data: []};
    for (const sheet of sheets) {
      const sheetData = this.parseSheetData(sheet);
      if (sheetData) {
        (response.data as Sheet[]).push(sheetData);
      } else {
        return {isValid: false, data: this.parseError};
      }
    }
    return response;
  }

  private parseSheetData(sheet): Sheet {
    const tabColor = sheet.properties.tabColor;
    const sheetData = sheet.data[0];
    try {
      return {
        title: sheet.properties.title,
        colorId: tabColor ? this.getSimilarColor(this.convertToRgb(sheet.properties.tabColor)) : null,
        attendeesEmail: sheetData.rowData[0].values[2] ? sheetData.rowData[0].values[2].formattedValue : null,
        lessons: this.getRowValues(sheet.data[0].rowData.slice(3))
      };
    } catch (e) {
      this.parseError.sheet = sheet.properties.title;
      // const messageText = `Файл не відповідає шаблону. Помилка зчитування в листі: ${sheet.properties.title}.`;
      // const message = new BehaviorSubject(messageText);
      return null;
    }
  }

  /**
   * Method takes data from events-export rows and generates lesson for each table row
   * @params rowData - array, contains data of rows from table sheet
   * @returns array of lessons
   */
private getRowValues(rowsData): Array<Lesson> {
    return rowsData.map(this.parseRowData.bind(this));
  }

  /**
   * Methods takes data of events-export row and convert it into lesson metadata,
   * if row contains invalid data throw the error
   * @params rowData - data of events-export row
   * @params index - row order in events-export
   * @returns - lesson object
   */
  private parseRowData({values: rowData}, index): Lesson {
    const lessonProps = LessonProps;
    return rowData.reduce((lesson, cellData, idx) => {
      if (idx === (Object.keys(lessonProps).length / 2)) { return lesson; }
      try {
        switch (lessonProps[idx]) {
          case 'date':
            const date = this.parseInt(cellData.effectiveValue.numberValue, lessonProps[idx]);
            lesson[lessonProps[idx]] = SpreadsheetParse.convertFromSerialToMoment(date);
            break;
          case 'number':
          case 'order':
            lesson[lessonProps[idx]] = this.parseInt(cellData.formattedValue, lessonProps[idx]);
            break;
          default:
            lesson[lessonProps[idx]] = cellData.formattedValue;
        }
        return lesson;
      } catch (e) {
        this.parseError.row = index + 4;
        throw Error();
      }
    }, {});
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
  private getSimilarColor(color: RgbObj): number {
    let similarRgb = this.hexToRgb(this.colors[0]);
    return this.colors.reduce(
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

private parseInt(data, column: string): number {
    if (Number.isInteger(Number.parseInt(data, 10))) {
      return Number.parseInt(data, 10);
    } else {
      this.parseError.column = column;
      this.parseError.message = 'Очікується ціле число';
      throw Error();
    }
  }


}
