import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AppComponent } from './app.component';

// NgRx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment';

import {
  GoogleApiModule,
  GoogleApiService,
  GoogleAuthService,
  NgGapiClientConfig,
  NG_GAPI_CONFIG,
  GoogleApiConfig
} from 'ng-gapi';

const gapiClientConfig: NgGapiClientConfig = {
  client_id: '187709823208-u52p9n3147kad6hf7pgirk52lauhmoo8.apps.googleusercontent.com',
  discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4',
    'https://content.googleapis.com/$ discovery/v1/apis/drive/v3/rest'],
  ux_mode: 'popup',
  redirect_uri: 'http://localhost:4200',
  scope: [
    'https://spreadsheets.google.com/feeds/spreadsheets/private/full',
    'https://www.googleapis.com/auth/spreadsheets.readonly',
    'https://www.googleapis.com/auth/drive',
    'https://www.googleapis.com/auth/drive.appdata',
    'https://www.googleapis.com/auth/drive.file',
    'https://www.googleapis.com/auth/drive.metadata',
    'https://www.googleapis.com/auth/drive.metadata.readonly',
    'https://www.googleapis.com/auth/drive.photos.readonly',
    'https://www.googleapis.com/auth/drive.readonly',
    'https://www.googleapis.com/auth/calendar',
    'https://www.googleapis.com/auth/calendar.events'
  ].join(' ')
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    UserModule,
    DashboardModule,
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: gapiClientConfig
    }),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: 'APM Demo App DevTools',
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
