import { TestBed } from '@angular/core/testing';

import { SettingsService } from './settings.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import {environment} from '../../../environments/environment';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';


describe('SettingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [AngularFireModule.initializeApp(environment.firebase)],
    providers: [AngularFirestore]
  }));

  it('should be created', () => {
    const service: SettingsService = TestBed.get(SettingsService);
    expect(service).toBeTruthy();
  });
});
