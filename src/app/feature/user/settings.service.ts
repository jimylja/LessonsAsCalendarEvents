import {Injectable, Injector} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {map, switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {LessonsSettings} from '../../models/lessonsSettings';
import {UserFacade} from './user.facade';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private userFacade: UserFacade
  constructor(
    private inj: Injector,
    private db: AngularFirestore) { }

  /**
   * The method returns the settings of the user who was authorized
   * if user absent return default settings
   * @inputs id - user id
   * @returns - user settings
   */
  getUserSettings(id: string): Observable<LessonsSettings> {
    return this.db.collection('users').doc(id).valueChanges().pipe(
      map((userData: {settings: LessonsSettings}) => userData ? userData.settings : environment.settings)
    );
  }

  /**
   * The method update settings for active user
   * if user absent creates new record for him in database
   * @inputs settings - user lesson settings
   * @returns - user settings
   */
  saveUserSettings(settings: LessonsSettings): Observable<any> {
    this.userFacade = this.inj.get(UserFacade);
    return this.userFacade.user$.pipe(
      switchMap(profile => this.db.collection('users')
        .doc(profile.id)
        .set({profile, settings}, {merge: true})
        .then(() => settings)
      ),
      map(d => settings)
    );
  }
}
