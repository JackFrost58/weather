import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HealthComponent} from './health.component';

const children: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HealthComponent,
  },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(children)],
  exports: [],
  providers: [],
})
export class HealthRouterModule {}
