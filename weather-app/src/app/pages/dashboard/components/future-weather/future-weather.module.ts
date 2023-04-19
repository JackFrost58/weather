import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FutureWeatherComponent} from './future-weather.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FutureWeatherComponent],
  exports: [FutureWeatherComponent]
})
export class FutureWeatherModule { }
