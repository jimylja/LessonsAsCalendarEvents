import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardShellComponent } from './dashboard-shell/dashboard-shell.component';
import { SpreadsheetGuard } from '../spreadsheet/spreadsheet.guard';
import { AuthGuard } from './auth.guard';
import { NotFoundComponent } from '../../shared/components/not-found/not-found.component';
const routes: Routes = [
  {
    path: '',
    component: DashboardShellComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'files',
        loadChildren: () => import('../file-picker/file-picker.module').then(m => m.FilePickerModule),
        canActivate: [AuthGuard],
        canLoad: [AuthGuard]
      },
      {
        path: 'calendars',
        loadChildren: () => import('../calendar/calendar.module').then(m => m.CalendarModule),
        canActivate: [AuthGuard],
        canLoad: [AuthGuard]
      },
      {
        path: 'spreadsheet',
        loadChildren: () => import('../spreadsheet/spreadsheet.module').then(m => m.SpreadsheetModule),
        canActivate: [SpreadsheetGuard, AuthGuard]
      },
      {
        path: 'user',
        loadChildren: () => import('../user/user.module').then(m => m.UserModule)
      },
      {
        path: '**', component: NotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
