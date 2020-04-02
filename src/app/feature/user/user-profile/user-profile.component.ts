import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable} from 'rxjs';
import {User, UserStats} from '../../../models/user';
import {UserFacade} from '../user.facade';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserProfileComponent {

  constructor(private userFacade: UserFacade) { }
  activeUser$: Observable<User> = this.userFacade.user$;
  userStats$: Observable<UserStats> = this.userFacade.userStatistic$;

  logout(): void {
    this.userFacade.logout();
  }
}
