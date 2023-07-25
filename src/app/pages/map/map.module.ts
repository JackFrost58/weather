import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MapComponent} from './map.component';
import {MapRouterModule} from './map.router';
import {HeaderInfoModule} from '@shared/components/header-info/header-info.module';
import {MaterialModule} from '@shared/material.module';

@NgModule({
  imports: [
    CommonModule,
    MapRouterModule,
    HeaderInfoModule,
    MaterialModule
  ],
  declarations: [MapComponent]
})
export class MapModule { }
