import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FutureWeatherModule} from './components/future-weather/future-weather.module';
import {WeatherInfoModule} from './components/weather-info/weather-info.module';
import {DashboardComponent} from './dashboard.component';
import {DashboardRouterModule} from './dashboard.router';

@NgModule({
  imports: [
    CommonModule,
    FutureWeatherModule,
    WeatherInfoModule,
    DashboardRouterModule,
  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent]
})
export class DashboardModule { }
