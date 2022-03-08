import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {ShellComponent} from './shell.component';
import {RouterTestingModule} from '@angular/router/testing';
import {SharedModule} from '../../../shared/shared.module';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {provideMockStore} from '@ngrx/store/testing';
import {UserFacade} from '../../user/user.facade';
import {appInitialState} from '../../../state/app.state';

describe('DashboardShellComponent', () => {
  const initialState = appInitialState;
  let component: ShellComponent;
  let fixture: ComponentFixture<ShellComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShellComponent ],
      imports: [
        SharedModule,
        RouterTestingModule,
      ],
      providers: [provideMockStore({initialState}), UserFacade],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
