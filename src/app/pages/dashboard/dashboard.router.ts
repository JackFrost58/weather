import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';

const children: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DashboardComponent,
  },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(children)],
  exports: [],
  providers: [],
})
export class DashboardRouterModule {}
