import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreloadingStrategyService } from './core/preloading-strategy.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./feature/shell/shell.module').then(m => m.ShellModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadingStrategyService, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
