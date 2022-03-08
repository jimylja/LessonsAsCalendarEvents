import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FeatureWidgetComponent } from './feature-widget.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

describe('FeatureWidgetComponent', () => {
  let component: FeatureWidgetComponent;
  let fixture: ComponentFixture<FeatureWidgetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureWidgetComponent ],
      imports: [MatCardModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
