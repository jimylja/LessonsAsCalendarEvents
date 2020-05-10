import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, pluck, retryWhen } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DriveFile } from '../../models/drive-file';
import { environment } from '../../../environments/environment';
import { AuthService } from '../user/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DriveApiService {
  static readonly FILES_LIST_ENDPOINT = `${environment.apiEndpoints.drive}/files`;
  constructor(private httpClient: HttpClient, private auth: AuthService) {}

  public getDriveSheets(): Observable<DriveFile[]> {
    const spreadSheetTypes = `mimeType='application/vnd.google-apps.spreadsheet'`;
    const displayedFields = 'files(id, name, webViewLink, modifiedTime)';
    const params = new HttpParams().append('q', spreadSheetTypes).append('fields', displayedFields);
    return this.httpClient.get(DriveApiService.FILES_LIST_ENDPOINT, { params }).pipe(
      retryWhen(this.auth.retryWithNewToken()),
      catchError(() => { throw Error('Invalid Credentials'); }),
      pluck('files')
    );
  }
}
