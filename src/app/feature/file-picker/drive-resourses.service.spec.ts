import { TestBed } from '@angular/core/testing';

import { DriveResourcesService } from './drive-resources.service';

describe('DriveResoursesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DriveResourcesService = TestBed.get(DriveResourcesService);
    expect(service).toBeTruthy();
  });
});
