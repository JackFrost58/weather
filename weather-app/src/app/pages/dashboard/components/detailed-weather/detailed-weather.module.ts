import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {DetailedWeatherComponent} from './detailed-weather.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DetailedWeatherComponent],
  exports: [DetailedWeatherComponent]
})
export class DetailedWeatherModule { }
