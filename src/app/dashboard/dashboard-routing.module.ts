import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardShellComponent } from './dashboard-shell/dashboard-shell.component';
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
        loadChildren: () => import('../file-picker/file-picker.module').then(m => m.FilePickerModule),
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
