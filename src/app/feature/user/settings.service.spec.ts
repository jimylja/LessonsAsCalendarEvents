import {TestBed} from '@angular/core/testing';
import {SettingsService} from './settings.service';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireModule} from '@angular/fire';
import {Store} from '@ngrx/store';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {appInitialState, AppState} from '../../state/app.state';
import {environment} from '../../../environments/environment';
import {FirebaseMock} from './mock/firebase.mock';
import {mockNewUser, mockSettings, mockStatistic} from './mock/user.mock';
import {UserFacade} from './user.facade';
import {RouterTestingModule} from '@angular/router/testing';
import {MatSnackBarModule} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {of} from 'rxjs';
import {MessageService} from '../../core/message.service';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('SettingsService', () => {
  let store: MockStore<AppState>;
  const initialState = appInitialState;
  const fb = new FirebaseMock();
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      NoopAnimationsModule,
      RouterTestingModule,
      MatSnackBarModule,
      AngularFireModule.initializeApp(environment.firebase)],
    providers: [
      {provide: AngularFirestore, useValue: fb},
      {provide: UserFacade, useValue: {user$: of(mockNewUser), userStatistic$: of(mockStatistic), login: () => {}}},
      {provide: MessageService  , useValue: {showMessage: () => {console.log('snack bar'); }} },
      provideMockStore({initialState}),
      SettingsService
    ],
    schemas: [NO_ERRORS_SCHEMA]
  }));

  it('should be created', () => {
    store = TestBed.get(Store);
    const service: SettingsService = TestBed.get(SettingsService);
    expect(service).toBeTruthy();
  });

  it('should return default settings if user no present in db', () => {
    const service: SettingsService = TestBed.get(SettingsService);
    service.getUserData('failedId').subscribe(userData => {
      expect(userData.settings).toEqual(environment.settings);
    });
  });

  it('should return user settings from db', () => {
    const service: SettingsService = TestBed.get(SettingsService);
    service.getUserData('werwfsdfsdf0d8sfsd').subscribe(userData => {
      expect(userData.settings).toEqual(mockSettings);
    });
  });


  it('should set new settings for user', () => {
    const service: SettingsService = TestBed.get(SettingsService);
    service.updateUserSettings(mockSettings).subscribe(settings =>
      expect(settings).toEqual(mockSettings)
    );
  });
});

