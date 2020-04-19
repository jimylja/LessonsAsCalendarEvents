import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {ActiveItemsFacade} from '../../active-items/active-items.facade';
import {ActiveItemsState} from '../../active-items/state/active-items.reducer';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
  isSpreadsheetEnabled: boolean;
  activeItems$: Observable<ActiveItemsState>;
  constructor(private activeItemsFacade: ActiveItemsFacade) {}

  ngOnInit() {
    this.activeItems$ = this.activeItemsFacade.activeItems$.pipe(
      tap(activeItems => {
        this.isSpreadsheetEnabled = Boolean(activeItems.activeCalendar && activeItems.activeFile);
      })
    );
  }
}
