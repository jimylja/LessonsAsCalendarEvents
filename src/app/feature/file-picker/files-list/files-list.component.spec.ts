import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FilesListComponent } from './files-list.component';
import { MatCardModule, MatProgressSpinnerModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { NO_ERRORS_SCHEMA } from '@angular/core';


describe('FilesListComponent', () => {
  let component: FilesListComponent;
  let fixture: ComponentFixture<FilesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilesListComponent],
      imports: [
        MatCardModule, MatProgressSpinnerModule,
        RouterTestingModule,
        HttpClientTestingModule,
        StoreModule.forRoot({})
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
