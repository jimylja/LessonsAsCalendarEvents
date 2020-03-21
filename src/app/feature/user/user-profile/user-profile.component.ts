import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../../../models/user';
import {select, Store} from '@ngrx/store';
import * as fromUser from '../state';
import {AuthService} from '../auth.service';
import * as UserActions from '../state/user.actions';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserProfileComponent {

  constructor(private store: Store<fromUser.State>, private authService: AuthService) { }
  activeUser$: Observable<User> = this.store.pipe(select(fromUser.getCurrentUser)).pipe();

  logout(): void {
    this.store.dispatch(new UserActions.Logout());
  }

}
