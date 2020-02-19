import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { DashboardGuard } from './dashboard/dashboard.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: '',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [DashboardGuard],
    canLoad: [DashboardGuard]
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
