import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardShellComponent } from './dashboard-shell/dashboard-shell.component';
import { SpreadsheetGuard } from '../spreadsheet/spreadsheet.guard';
const routes: Routes = [
  {
    path: '',
    component: DashboardShellComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'select-file',
        loadChildren: () => import('../file-picker/file-picker.module').then(m => m.FilePickerModule)
      },
      {
        path: 'calendars',
        loadChildren: () => import('../calendar/calendar.module').then(m => m.CalendarModule)
      },
      {
        path: 'spreadsheet',
        loadChildren: () => import('../spreadsheet/spreadsheet.module').then(m => m.SpreadsheetModule),
        canActivate: [SpreadsheetGuard]
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
