import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsTabComponent } from './lessons-tab.component';

describe('LessonsTabComponent', () => {
  let component: LessonsTabComponent;
  let fixture: ComponentFixture<LessonsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
