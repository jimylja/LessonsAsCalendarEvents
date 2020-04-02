import { TestBed } from '@angular/core/testing';

import { SettingsService } from './settings.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { appInitialState, AppState } from '../../state/app.state';
import { environment } from '../../../environments/environment';
import {FirebaseMock} from './mock/firebase.mock';
import {mockNewUser, mockSettings} from './mock/user.mock';
import {UserFacade} from './user.facade';
import {of} from 'rxjs';

describe('SettingsService', () => {
  let store: MockStore<AppState>;
  const initialState = appInitialState;
  const fb = new FirebaseMock();
  beforeEach(() => TestBed.configureTestingModule({
    imports: [AngularFireModule.initializeApp(environment.firebase)],
    providers: [
      {provide: AngularFirestore, useValue: fb},
      {provide: UserFacade, useValue: {user$: of(mockNewUser), login: () => {}}},
      provideMockStore({initialState}),
      SettingsService
    ]
  }));

  it('should be created', () => {
    store = TestBed.get(Store);
    const service: SettingsService = TestBed.get(SettingsService);
    expect(service).toBeTruthy();
  });

  it('should return default settings if user no present in db', () => {
    const service: SettingsService = TestBed.get(SettingsService);
    service.getUserData('failedId').subscribe(settings => {
      expect(settings).toEqual(environment.settings);
    });
  });

  it('should return user settings from db', () => {
    const service: SettingsService = TestBed.get(SettingsService);
    service.getUserData('werwfsdfsdf0d8sfsd').subscribe(settings => {
      expect(settings).toEqual(mockSettings);
    });
  });


  it('should set new settings for user', () => {
    const service: SettingsService = TestBed.get(SettingsService);
    service.updateUserSettings(mockSettings).subscribe(settings =>
      expect(settings).toEqual(mockSettings)
    );
  });
});

