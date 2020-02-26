import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardShellComponent } from './dashboard-shell/dashboard-shell.component';
import { SharedModule } from '../../shared/shared.module';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { ActiveFileWidgetComponent } from './dashboard/active-file-widget/active-file-widget.component';

@NgModule({
  declarations: [DashboardComponent, DashboardShellComponent, ActiveFileWidgetComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class DashboardModule { }
