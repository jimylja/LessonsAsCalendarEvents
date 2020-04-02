import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../../../models/user';
import {UserFacade} from '../../user/user.facade';

@Component({
  selector: 'app-dashboard-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ShellComponent {
  activeUser$: Observable<User> = this.userFacade.user$;
  constructor(private userFacade: UserFacade) { }
}
