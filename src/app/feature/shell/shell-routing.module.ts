import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShellComponent } from './shell/shell.component';
import { EventsExportGuard } from '../events-export/events-export.guard';
import { AuthGuard } from './auth.guard';
import { NotFoundComponent } from '../../shared/components/not-found/not-found.component';
import { GuideComponent } from './guide/guide.component';
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
        loadChildren: () => import('../active-items/active-items.module').then(m => m.ActiveItemsModule),
        canActivate: [AuthGuard],
        canLoad: [AuthGuard]
      },
      {
        path: 'calendars',
        loadChildren: () => import('../active-items/active-items.module').then(m => m.ActiveItemsModule),
        canActivate: [AuthGuard],
        canLoad: [AuthGuard]
      },
      {
        path: 'spreadsheet',
        loadChildren: () => import('../events-export/events-export.module').then(m => m.EventsExportModule),
        canActivate: [EventsExportGuard, AuthGuard]
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
