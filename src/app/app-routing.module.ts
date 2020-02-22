import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { DashboardGuard } from './feature/dashboard/dashboard.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./feature/user/user.module').then(m => m.UserModule)
  },
  {
    path: '',
    loadChildren: () => import('./feature/dashboard/dashboard.module').then(m => m.DashboardModule),
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
