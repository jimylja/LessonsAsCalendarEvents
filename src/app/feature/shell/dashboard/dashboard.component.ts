import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable} from 'rxjs';
import {ActiveItemsFacade} from '../../active-items/active-items.facade';
import {ActiveItemsState} from '../../active-items/state/active-items.reducer';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DashboardComponent {
  activeItems$: Observable<ActiveItemsState> = this.activeItemsFacade.activeItems$;
  constructor(private activeItemsFacade: ActiveItemsFacade) {}
}
