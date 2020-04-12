import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CalendarApiService} from '../calendar-api.service';
import {combineLatest, Observable} from 'rxjs';
import {CalendarEntry} from '../../../models/calendar';
import {select, Store} from '@ngrx/store';
import * as fromCalendar from '../state';
import * as CalendarActions from '../state/calendar.actions';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {ActionList, ActionsEntries, ItemAction} from '../../../shared/components/list-item/list-item.component';

export interface CalendarData {
  activeCalendar: CalendarEntry;
  calendarsList: CalendarEntry[];
}

@Component({
  selector: 'app-calendars-list',
  templateUrl: './calendars-list.component.html',
  styleUrls: ['./calendars-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CalendarsListComponent implements OnInit {
  calendarsData$: Observable<CalendarData>;
  actions = ActionList;
  calendarActions: ActionsEntries[] = [{name: ActionList.clearCalendar, description: 'Очистити календар', icon: 'delete_sweep'}];
  constructor(
    private router: Router,
    private calendarApi: CalendarApiService,
    private store: Store<fromCalendar.State>
    ) { }

  ngOnInit() {
    this.calendarsData$ = combineLatest(
      this.store.pipe(select(fromCalendar.getCurrentCalendar)),
      this.calendarApi.getCalendars()
    ).pipe(
      map(data => {
        return {
          activeCalendar: data[0],
          calendarsList: data[1]
        };
      })
    );
  }

  calendarSelectHandler(calendar: CalendarEntry) {
    this.store.dispatch(new CalendarActions.CalendarSelected(calendar));
    this.router.navigate(['/']);
  }

  calendarClearHandler(calendarId: string) {
    this.calendarApi.clearCalendar(calendarId);
  }

  eventHandler({action, data}: ItemAction) {
    switch (action) {
      case ActionList.itemSelected:
        this.calendarSelectHandler(data as CalendarEntry);
        break;
      case ActionList.clearCalendar:
        this.calendarClearHandler((data as CalendarEntry).id);
        break;
    }
  }
}
