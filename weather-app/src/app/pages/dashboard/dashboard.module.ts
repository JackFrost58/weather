import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {DetailedWeatherModule} from './components/detailed-weather/detailed-weather.module';
import {WeatherInfoModule} from './components/weather-info/weather-info.module';
import {DashboardComponent} from './dashboard.component';
import {DashboardRouterModule} from './dashboard.router';

@NgModule({
  imports: [
    CommonModule,
    WeatherInfoModule,
    DashboardRouterModule,
    DetailedWeatherModule
  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent]
})
export class DashboardModule { }
