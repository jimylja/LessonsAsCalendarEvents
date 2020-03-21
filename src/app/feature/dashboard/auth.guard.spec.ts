import { TestBed, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { GoogleApiModule, NgGapiClientConfig, NG_GAPI_CONFIG } from 'ng-gapi';
import { provideMockStore} from '@ngrx/store/testing';
import { environment } from '../../../environments/environment';

const gApiClientConfig: NgGapiClientConfig = {
  ...environment.gApiClient,
  ux_mode: 'popup'
};

describe('AuthGuard', () => {
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
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({initialState}),
        AuthGuard
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        GoogleApiModule.forRoot({
          provide: NG_GAPI_CONFIG,
          useValue: gApiClientConfig
        }),
      ],
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
