import {Injectable, Injector} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {map, switchMap, tap, take, pluck} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';
import {LessonsSettings} from '../../models/lessonsSettings';
import {UserFacade} from './user.facade';
import {UserState} from './state/user.reducer';
import {User, UserStats} from '../../models/user';
import {MessageService} from '../../core/message.service';


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
  private googleProfile: User;
  firstVisitMessage = {
    redirectTo: 'guide',
    data: {
      message: new BehaviorSubject('Схоже Ви вперше користуєтесь цим додатком, ознайомтесь з інструкцією...'),
      title: 'Привіт'
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
  getUserData(user): Observable<UserState> {
    this.googleProfile = user;
    return this.db.collection('users').doc(user.id).valueChanges().pipe(
      take(1),
      tap(() => this.updateStatistics({lastVisit: new Date()}).pipe(take(1)).subscribe()),
      map((userData: UserState) => {
        if (!userData) {
          this.messageService.showMessage(this.firstVisitMessage);
          this.createUserProfile().subscribe();
        }
        return userData;
      })
    );
  }

  /**
   * The method updates settings for lessons
   * @inputs settings - setting for lessons
   * @returns - updated settings data
   */
  updateUserSettings(settings: LessonsSettings): Observable<LessonsSettings> {
    return this.updateUserData({settings}).pipe(
      pluck('settings'),
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
    return this.userFacade.user$.pipe(
      tap(profile => {if (!data) { data = {profile}; }}),
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
