import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {catchError, pluck, tap} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import { DriveFile } from '../../models/drive-file';

@Injectable({
  providedIn: 'root'
})
export class DriveResourcesService {
  private readonly KEY = 'AIzaSyBlXzZ7krIB-hpFcAH5s4vU3JjhM8KuC38&q';
  private FILES_API_URL = `https://www.googleapis.com/drive/v3/files`;
  private readonly API_URL: string = 'https://sheets.googleapis.com/v4/spreadsheets';
  private readonly DISC_URL = `${this.FILES_API_URL}?key=${this.KEY}=mimeType='application/vnd.google-apps.spreadsheet'`;

  constructor(private httpClient: HttpClient) {}

  public getDriveSheets(): Observable<DriveFile[]> {
    return this.httpClient.get(this.DISC_URL).pipe(
      pluck('files')
    );
  }

  public findById(spreadsheetId: string): Observable<any> {
    return this.httpClient.get(this.API_URL + '/' + spreadsheetId + '/?includeGridData=true');
  }

}
