import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, from} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { mergeMap, pluck} from 'rxjs/operators';
import { Sheet } from '../../models/sheet';
import { CalendarApiService } from '../active-items/calendar-api.service';
import { environment } from '../../../environments/environment';
import { MessageService } from '../../core/message.service';
import { ParseError } from '../active-items/state/active-items.reducer';
import { ActiveItemsFacade } from '../active-items/active-items.facade';

interface PendingMessage {
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
  parseError: ParseError = {};
  worker: Worker;
  pendingMessages: PendingMessage;
  constructor(private httpClient: HttpClient,
              private activeItemsFacade: ActiveItemsFacade,
              private messageService: MessageService,
              private calendarService: CalendarApiService) {

    if (typeof Worker !== 'undefined') {
      this.worker = new Worker('./spreadsheet.worker', { type: 'module' });

      this.worker.onerror = err => {
        const messageText = `Файл не відповідає шаблону. Помилка зчитування в листі: ${err.message}.`;
        const message = new BehaviorSubject(messageText);
        this.messageService.showMessage({data: {message, title: 'Помилка валідації' }, panelClass: ['popup-error']});
        this.activeItemsFacade.fileValidationFailed(this.parseError);
      };

      this.worker.onmessage = ({ data }) => {
        const parsedSheet = data as WorkerResp;
        if (parsedSheet.isValid) {
          this.pendingMessages.resolve(parsedSheet.data);
        } else {
          const error = parsedSheet.data as ParseError;
          const message = new BehaviorSubject(error.message);
          this.messageService.showMessage({data: {message, title: 'Помилка валідації' }, panelClass: ['popup-error']});
          this.activeItemsFacade.fileValidationFailed(error);
        }
      };
    } else {
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }

  public getSpreadsheetData(id: string): Observable<Sheet[]> {
    return combineLatest(
      this.fetchSpreadsheet(id),
      this.calendarService.getCalendarColors()
    ).pipe(
      mergeMap((([sheets, colors]) => {
        this.colors = colors;
        this.worker.postMessage({sheets, colors});
        const promise = new Promise((resolve, reject) => {
          this.pendingMessages = {resolve, reject};
        });
        return from(promise) as Observable<Sheet[]>;
      }))
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
}
