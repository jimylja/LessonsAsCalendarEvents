import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarsListComponent } from './calendars-list/calendars-list.component';
import { CalendarItemComponent } from './calendars-list/calendar-item/calendar-item.component';
import {MatCardModule} from '@angular/material';


@NgModule({
  declarations: [CalendarsListComponent, CalendarItemComponent],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    MatCardModule,
  ]
})
export class CalendarModule { }
