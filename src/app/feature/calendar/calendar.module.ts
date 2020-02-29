import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarsListComponent } from './calendars-list/calendars-list.component';
import { CalendarItemComponent } from './calendars-list/calendar-item/calendar-item.component';
import { MatCardModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/calendar.reducer';

@NgModule({
  declarations: [CalendarsListComponent, CalendarItemComponent],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    MatCardModule,
    StoreModule.forFeature('calendar', reducer),
  ]
})
export class CalendarModule { }
