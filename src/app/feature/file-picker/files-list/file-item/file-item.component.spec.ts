import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileItemComponent } from './file-item.component';
import { MatCardModule } from '@angular/material';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('FileItemComponent', () => {
  let component: FileItemComponent;
  let fixture: ComponentFixture<FileItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileItemComponent ],
      imports: [ MatCardModule ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
