import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarsListComponent } from './calendars-list/calendars-list.component';
import { MatCardModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/calendar.reducer';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [CalendarsListComponent],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    MatCardModule,
    SharedModule,
    StoreModule.forFeature('calendar', reducer),
  ]
})
export class CalendarModule { }
