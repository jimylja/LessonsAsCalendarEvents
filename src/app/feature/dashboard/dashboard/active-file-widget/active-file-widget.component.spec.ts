import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveFileWidgetComponent } from './active-file-widget.component';
import {MatCardModule} from '@angular/material';

describe('ActiveFileWidgetComponent', () => {
  let component: ActiveFileWidgetComponent;
  let fixture: ComponentFixture<ActiveFileWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveFileWidgetComponent ],
      imports: [ MatCardModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveFileWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
