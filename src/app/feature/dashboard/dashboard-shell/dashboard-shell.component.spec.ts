import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DashboardShellComponent} from './dashboard-shell.component';
import {RouterTestingModule} from '@angular/router/testing';
import {SharedModule} from '../../../shared/shared.module';
import {Store} from '@ngrx/store';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {UserFacade} from '../../user/user.facade';
import {appInitialState, AppState} from '../../../state/app.state';

describe('DashboardShellComponent', () => {
  let store: MockStore<AppState>;
  const initialState = appInitialState;
  let component: DashboardShellComponent;
  let fixture: ComponentFixture<DashboardShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardShellComponent ],
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
    store = TestBed.get(Store);
    fixture = TestBed.createComponent(DashboardShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
