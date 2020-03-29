import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardShellComponent } from './dashboard-shell/dashboard-shell.component';
import { SharedModule } from '../../shared/shared.module';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { FeatureWidgetComponent } from './dashboard/feature-widget/feature-widget.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [DashboardComponent, DashboardShellComponent, FeatureWidgetComponent, SidenavComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
  ]
})
export class DashboardModule { }
