import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormBuilder, FormControl, ReactiveFormsModule} from '@angular/forms';
import { LessonsTabComponent } from './lessons-tab.component';
import { MatMenuModule } from '@angular/material';
import {MatTableModule} from '@angular/material';
import { NO_ERRORS_SCHEMA } from '@angular/core';

xdescribe('LessonsTabComponent', () => {
  let component: LessonsTabComponent;
  let fixture: ComponentFixture<LessonsTabComponent>;
  const fb: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LessonsTabComponent],
      imports: [ReactiveFormsModule, MatMenuModule, MatTableModule],
      providers: [{ provide: FormBuilder, useValue: fb }],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonsTabComponent);
    component = fixture.componentInstance;

    component.form = fb.group({
      classesData: new FormControl()
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
