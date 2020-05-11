import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, from, of} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { mergeMap, pluck } from 'rxjs/operators';
import { Sheet } from '../../models/sheet';
import { CalendarApiService } from '../active-items/calendar-api.service';
import { environment } from '../../../environments/environment';
import { MessageService } from '../../core/message.service';
import { ParseError } from '../active-items/state/active-items.reducer';
import { ActiveItemsFacade } from '../active-items/active-items.facade';
import { SpreadsheetParse } from './spreadsheet-parse';

interface WorkerPromise {
  resolve;
  reject;
}

export interface WorkerResp {
  isValid: boolean;
  data: Sheet[] | ParseError;
}

@Injectable({
  providedIn: 'root'
})
export class SpreadsheetService {
  static readonly SPREADSHEET_API = environment.apiEndpoints.spreadsheet;
  colors: string[];
  worker: Worker;
  workerResult: WorkerPromise;
  parseSpreadsheet: (sheets, colors) => Observable<Sheet[]>;

  constructor(private httpClient: HttpClient,
              private activeItemsFacade: ActiveItemsFacade,
              private messageService: MessageService,
              private calendarService: CalendarApiService) {
    this.initParseMethod();
  }

  public getSpreadsheetData(id: string): Observable<Sheet[]> {
    return combineLatest([
        this.fetchSpreadsheet(id),
        this.calendarService.getCalendarColors()
      ]).pipe(
        mergeMap(([sheets, colors]) => {
          this.colors = colors;
          return this.parseSpreadsheet(sheets, colors);
        })
    );
  }

  /**
   * Method makes request, that takes data that contains in all sheets
   * @params spreadsheetId - id of events-export
   * @returns object, that contain array of data for each table sheet
   */
  private fetchSpreadsheet(spreadsheetId: string): Observable<any> {
    return this.httpClient.get(`${SpreadsheetService.SPREADSHEET_API}/${spreadsheetId}/?includeGridData=true`).pipe(
      pluck('sheets')
    );
  }

  /**
   * init parse method for spreadsheet, if Worker is available take's it,
   * if not - parse spreadsheet in the same thread
   * @params spreadsheetId - id of events-export
   * @returns object, that contain array of data for each table sheet
   */
  private initParseMethod() {
    if (typeof Worker !== 'undefined') {
      this.worker = new Worker('./spreadsheet.worker', { type: 'module' });
      this.parseSpreadsheet = this.parseViaWorker;

      this.worker.onerror = err => {
        this.initErrorMessage({message: `Помилка валідації (${err.message})`});
      };

      this.worker.onmessage = ({ data }) => {
        const parsedSheet = data as WorkerResp;
        if (parsedSheet.isValid) {
          this.workerResult.resolve(parsedSheet.data);
        } else {
          this.workerResult.resolve(null);
          this.initErrorMessage(parsedSheet.data as ParseError);
        }
      };
    } else {
      this.parseSpreadsheet = this.parseViaClass;
    }

  }

  private initErrorMessage(error: ParseError) {
    const message = new BehaviorSubject(error.message);
    this.messageService.showMessage({data: {message, title: 'Помилка валідації' }, panelClass: ['popup-error']});
    this.activeItemsFacade.fileValidationFailed(error);
  }

  private parseViaWorker(sheets, colors): Observable<Sheet[]> {
    this.worker.postMessage({sheets, colors});
    const promise = new Promise((resolve, reject) => {
      this.workerResult = {resolve, reject};
    });
    return from(promise) as Observable<Sheet[]>;
  }

  private parseViaClass(sheets, colors): Observable<Sheet[]> {
    const parse = new SpreadsheetParse({sheets, colors});
    const resp = parse.parseSpreadsheet(sheets);
    if (resp.isValid) {
      return of(resp.data) as Observable<Sheet[]>;
    } else { this.initErrorMessage(resp.data  as ParseError); }
  }
}
