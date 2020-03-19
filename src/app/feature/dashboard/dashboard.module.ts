import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardShellComponent } from './dashboard-shell/dashboard-shell.component';
import { SharedModule } from '../../shared/shared.module';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { FeatureWidgetComponent } from './dashboard/feature-widget/feature-widget.component';

@NgModule({
  declarations: [DashboardComponent, DashboardShellComponent, FeatureWidgetComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class DashboardModule { }
