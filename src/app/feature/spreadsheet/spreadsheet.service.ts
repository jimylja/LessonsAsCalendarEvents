import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpreadsheetService {
  private readonly API_URL: string = 'https://sheets.googleapis.com/v4/spreadsheets';
  constructor( private httpClient: HttpClient) { }

  public getSpreadsheet(spreadsheetId: string): Observable<any> {
    return this.httpClient.get(this.API_URL + '/' + spreadsheetId + '/?includeGridData=true').pipe(
      pluck('sheets')
    );
  }
}
