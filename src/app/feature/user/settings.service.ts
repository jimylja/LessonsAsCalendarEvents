import {Injectable, Injector} from '@angular/core';
import {map, switchMap, tap, take, pluck, catchError} from 'rxjs/operators';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {LessonsSettings} from '../../models/lessonsSettings';
import {UserFacade} from './user.facade';
import {UserState} from './state/user.reducer';
import {User, UserStats} from '../../models/user';
import {MessageService} from '../../core/message.service';
import {environment} from '../../../environments/environment';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { Timestamp } from 'firebase/firestore';

export interface UserData {
  profile?: User;
  settings?: LessonsSettings;
  statistic?: UserStats;
}
@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private userFacade: UserFacade;
  private firstVisitMessage = {
    redirectTo: 'guide',
    data: {
      message: new BehaviorSubject('Схоже Ви вперше користуєтесь цим додатком, ознайомтесь з інструкцією...'),
      title: 'Привіт'
    }
  };
  private settingsSavedMessage = {
    data: {
      message: new BehaviorSubject('Ваші налаштування збережені'),
      title: 'Налаштування'
    }
  };

  constructor(
    private messageService: MessageService,
    private inj: Injector,
    private db: AngularFirestore) { }

  /**
   * The method returns the information of the user who was authorized
   * if user absent return undefined
   * @inputs id - user id
   * @returns - user data
   */
  getUserData(id): Observable<UserState> {
    return this.db.collection('users').doc(id).get().pipe(
      map(doc => {
        let userData: UserState = doc.data() as UserState;
        if (!doc.exists) {
          console.log('not exist');
          this.messageService.showMessage(this.firstVisitMessage);
          this.createUserProfile().subscribe(data => { userData = data; });
        }
        this.updateStatistics({lastVisit: Timestamp.now()}).pipe(take(1)).subscribe();
        console.log('user data', userData);
        return userData;
      }),
      catchError((err) => { console.log('error', err); return throwError(err); })
    );
  }

  /**
   * The method updates settings for lessons
   * @inputs settings - setting for lessons
   * @returns - updated settings data
   */
  updateUserSettings(settings: LessonsSettings): Observable<LessonsSettings> {
    return this.updateUserData({settings}).pipe(
    tap(resp => {
      if (resp) { this.messageService.showMessage(this.settingsSavedMessage); }
    }),
    pluck('settings')
    );
  }

  /**
   * The method update user statistic(lastVisit, export summary) for active user
   * if user absent creates new record for him in database
   * @inputs stats - user statistic
   * @returns - user updated statistic
   */
  updateStatistics(stats?: UserStats): Observable<UserStats> {
    this.userFacade = this.inj.get(UserFacade);
    return this.userFacade.userStatistic$.pipe(
      switchMap(statistic => this.updateUserData({statistic: {...statistic, ...stats}}).pipe(
        pluck('statistic'),
      ))
    );
  }

  /**
   * The method update data(settings, profile, statistic) for active user
   * if user absent creates new record for him in database
   * @inputs data - user data
   * @returns - user data
   */
  private updateUserData(data?: UserData): Observable<any> {
    this.userFacade = this.inj.get(UserFacade);
    return this.userFacade.user$.pipe(
      take(1),
      tap(profile => {if (!data) { data = {profile, settings: environment.settings}; }}),
      switchMap(profile => this.db.collection('users')
        .doc(profile.id)
        .set({...data}, {merge: true})
        .then(() => data)
      ),
      map(() => data)
    );
  }

  private createUserProfile() {
    return this.updateUserData();
  }
}
