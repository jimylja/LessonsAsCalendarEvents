import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../../../models/user';
import {UserFacade} from '../../user/user.facade';
import {EventBusService, EventType} from '../../../core/event-bus.service';

@Component({
  selector: 'app-dashboard-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ShellComponent {
  activeUser$: Observable<User> = this.userFacade.user$;
  constructor(private userFacade: UserFacade, private eventBus: EventBusService) { }

  onScroll(e) {
    this.eventBus.next({type: EventType.CONTENT_SCROLL, payload: e});
  }
}
