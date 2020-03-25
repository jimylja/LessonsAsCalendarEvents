import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GoogleApiModule, NG_GAPI_CONFIG } from 'ng-gapi';
import { environment } from '../../../environments/environment';

xdescribe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      GoogleApiModule.forRoot({provide: NG_GAPI_CONFIG, useValue: environment.gApiClient} )
    ]
  }));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
});
