import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MapComponent} from './map.component';

const children: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MapComponent,
  },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(children)],
  exports: [],
  providers: [],
})
export class MapRouterModule {}
