import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { pluck } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DriveFile } from '../../models/drive-file';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DriveResourcesService {
  static readonly FILES_LIST_ENDPOINT = `${environment.apiEndpoints.drive}/files`;
  constructor(private httpClient: HttpClient) {}

  public getDriveSheets(): Observable<DriveFile[]> {
    const spreadSheetTypes = `mimeType='application/vnd.google-apps.spreadsheet'`;
    const displayedFields = 'files(id, name, webViewLink, modifiedTime)';
    const params = new HttpParams().append('q', spreadSheetTypes).append('fields', displayedFields);
    return this.httpClient.get(DriveResourcesService.FILES_LIST_ENDPOINT, { params }).pipe(
      pluck('files')
    );
  }
}
