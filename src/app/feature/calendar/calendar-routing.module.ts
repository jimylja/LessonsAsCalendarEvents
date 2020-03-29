import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarsListComponent } from './calendars-list/calendars-list.component';

const routes: Routes = [
  {
    path: '',
    component: CalendarsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarRoutingModule { }
