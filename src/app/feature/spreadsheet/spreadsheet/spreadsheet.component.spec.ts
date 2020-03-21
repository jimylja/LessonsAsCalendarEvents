import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { SpreadsheetComponent } from './spreadsheet.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('SpreadsheetComponent', () => {
  let component: SpreadsheetComponent;
  let fixture: ComponentFixture<SpreadsheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpreadsheetComponent ],
      providers: [FormBuilder],
      imports: [
        MatSnackBarModule,
        StoreModule.forRoot({}),
        HttpClientTestingModule,
        RouterTestingModule
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpreadsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
