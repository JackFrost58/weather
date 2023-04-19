import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {WeatherInfoComponent} from './weather-info.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WeatherInfoComponent],
  exports: [WeatherInfoComponent]
})
export class WeatherInfoModule { }
