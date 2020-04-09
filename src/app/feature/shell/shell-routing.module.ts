import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShellComponent } from './shell/shell.component';
import { SpreadsheetGuard } from '../spreadsheet/spreadsheet.guard';
import { AuthGuard } from './auth.guard';
import { NotFoundComponent } from '../../shared/components/not-found/not-found.component';
import {GuideComponent} from './guide/guide.component';
const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
        canActivate: [AuthGuard],
        canLoad: [AuthGuard]
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
        path: 'guide',
        component: GuideComponent
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
export class ShellRoutingModule { }
