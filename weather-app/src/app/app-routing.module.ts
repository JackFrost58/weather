import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '', 
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard', 
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(
      (m) => m.DashboardModule
    )
  },
  {
    path: 'map', 
    loadChildren: () => import('./pages/map/map.module').then(
      (m) => m.MapModule
    )
  },
  {
    path: 'health', 
    loadChildren: () => import('./pages/health/health.module').then(
      (m) => m.HealthModule
    )
  },
  {
    path: 'wallet', 
    loadChildren: () => import('./pages/wallet/wallet.module').then(
      (m) => m.WalletModule
    )
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
