import { TestBed } from '@angular/core/testing';

import { DriveResourcesService } from './drive-resources.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('DriveResoursesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: DriveResourcesService = TestBed.get(DriveResourcesService);
    expect(service).toBeTruthy();
  });
});
