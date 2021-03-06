import { TestBed } from '@angular/core/testing';
import {DriveApiService} from './drive-api.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpParams} from '@angular/common/http';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {environment} from '../../../environments/environment';
import {GoogleAuthService} from 'ng-gapi';
import {mockAuthService} from '../user/mock/gapi.mock';

describe('DriveApiService', () => {
  let httpMock: HttpTestingController;
  let service: DriveApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: GoogleAuthService, useValue: mockAuthService },
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
    service = TestBed.inject(DriveApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make GET request when method was called', (done) => {
    service.getDriveSheets().subscribe(() => { done(); });
    const spreadSheetTypes = `mimeType='application/vnd.google-apps.spreadsheet'`;
    const displayedFields = 'files(id, name, webViewLink, modifiedTime)';
    const params = new HttpParams().append('q', spreadSheetTypes).append('fields', displayedFields);
    const request = httpMock.expectOne(`${environment.apiEndpoints.drive}/files?${params}`);
    expect(request.request.method).toEqual('GET');
    request.flush({files: []});
  });
});
