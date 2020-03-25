import { TestBed } from '@angular/core/testing';

import { SettingsService } from './settings.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import {appInitialState, AppState} from '../../state/app.state';
import { environment } from '../../../environments/environment';

xdescribe('SettingsService', () => {
  let store: MockStore<AppState>;
  const initialState = appInitialState;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [AngularFireModule.initializeApp(environment.firebase)],
    providers: [
      AngularFirestore,
      provideMockStore({initialState})
    ]
  }));

  it('should be created', () => {
    store = TestBed.get(Store);
    const service: SettingsService = TestBed.get(SettingsService);
    expect(service).toBeTruthy();
  });
});
