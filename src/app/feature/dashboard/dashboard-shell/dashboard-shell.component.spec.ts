import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardShellComponent } from './dashboard-shell.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../../../shared/shared.module';
import {Store, StoreModule} from '@ngrx/store';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {UserFacade} from '../../user/user.facade';

export interface AppStore {
  user: {
    isLoggedIn: boolean;
    userProfile: any
  };
  calendar: {
    id: string,
    summary: string,
    description: string,
    timeZone: string,
    accessRole: string,
    backgroundColor: string,
  };
  file: {
    id: string,
    name: string
  };
}

describe('DashboardShellComponent', () => {
  let store: MockStore<AppStore>;
  const initialState = {
    user: {
      isLoggedIn: false,
      userProfile: {
        id: null
      }
    },
    calendar: {
      id: null,
      summary: null,
      description: null,
      timeZone: null,
      accessRole: null,
      backgroundColor: null,
    },
    file: {
      id: null,
      name: null
    }
  };
  let component: DashboardShellComponent;
  let fixture: ComponentFixture<DashboardShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardShellComponent ],
      imports: [
        SharedModule,
        RouterTestingModule,
        StoreModule.forRoot({}),
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
