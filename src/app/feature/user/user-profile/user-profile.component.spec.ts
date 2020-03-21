import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserProfileComponent } from './user-profile.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { GoogleApiModule, GoogleApiService, GoogleAuthService, NG_GAPI_CONFIG, NgGapiClientConfig} from 'ng-gapi';
import {environment} from '../../../../environments/environment';

export interface UserState {
  user: {
    isLoggedIn: boolean;
    userProfile: any
  };
}

describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;
  let store: MockStore<UserState>;
  const initialState = {user: {isLoggedIn: false}};

  const gApiClientConfig: NgGapiClientConfig = {
    ...environment.gApiClient,
    ux_mode: 'popup'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileComponent ],
      imports: [
        HttpClientTestingModule,
        GoogleApiModule.forRoot({provide: NG_GAPI_CONFIG, useValue: gApiClientConfig})
      ],
      providers: [GoogleAuthService, GoogleApiService, provideMockStore({initialState})],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
