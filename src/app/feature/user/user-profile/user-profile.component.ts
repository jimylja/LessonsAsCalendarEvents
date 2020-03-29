import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../../../models/user';
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

  logout(): void {
    this.userFacade.logout();
  }
}
