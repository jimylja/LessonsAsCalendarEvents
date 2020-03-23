import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {LessonsSettings} from '../../models/lessonsSettings';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private db: AngularFirestore) { }

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
}
