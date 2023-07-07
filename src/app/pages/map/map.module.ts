import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MapComponent} from './map.component';
import {MapRouterModule} from './map.router';

@NgModule({
  imports: [
    CommonModule,
    MapRouterModule
  ],
  declarations: [MapComponent]
})
export class MapModule { }
