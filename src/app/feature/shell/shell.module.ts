import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShellRoutingModule } from './shell-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShellComponent } from './shell/shell.component';
import { GuideComponent } from './guide/guide.component';
import { SharedModule } from '../../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { FeatureWidgetComponent } from './dashboard/feature-widget/feature-widget.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [DashboardComponent, ShellComponent, FeatureWidgetComponent, SidenavComponent, GuideComponent],
  imports: [
    CommonModule,
    ShellRoutingModule,
    SharedModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
  ]
})
export class ShellModule { }
