import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveCalendarWidgetComponent } from './active-calendar-widget.component';

describe('ActiveCalendarWidgetComponent', () => {
  let component: ActiveCalendarWidgetComponent;
  let fixture: ComponentFixture<ActiveCalendarWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveCalendarWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveCalendarWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
