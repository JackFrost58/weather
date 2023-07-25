import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {MaterialModule} from '@shared/material.module';
import {TemperatureChartModule} from '../temperature-chart/temperature-chart.module';
import {WeatherInfoComponent} from './weather-info.component';
import {HeaderInfoModule} from '@components/header-info/header-info.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FontAwesomeModule,
    FormsModule,
    TemperatureChartModule,
    HeaderInfoModule
  ],
  declarations: [WeatherInfoComponent],
  exports: [WeatherInfoComponent]
})
export class WeatherInfoModule { }
