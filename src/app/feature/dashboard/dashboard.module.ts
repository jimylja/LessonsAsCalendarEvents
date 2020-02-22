import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardShellComponent } from './dashboard-shell/dashboard-shell.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [DashboardComponent, DashboardShellComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
