import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ShellComponent} from './shell.component';
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
  let component: ShellComponent;
  let fixture: ComponentFixture<ShellComponent>;

  beforeEach(async(() => {
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
    store = TestBed.get(Store);
    fixture = TestBed.createComponent(ShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
