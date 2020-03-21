import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarItemComponent } from './calendar-item.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import {MatCardModule, MatMenuModule} from '@angular/material';

describe('CalendarItemComponent', () => {
  let component: CalendarItemComponent;
  let fixture: ComponentFixture<CalendarItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarItemComponent ],
      imports: [MatCardModule, MatMenuModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
