import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {HighchartsChartModule} from 'highcharts-angular';
import {TemperatureChartComponent} from './temperature-chart.component';

@NgModule({
  imports: [
    CommonModule,
    HighchartsChartModule
  ],
  declarations: [TemperatureChartComponent],
  exports: [TemperatureChartComponent]
})
export class TemperatureChartModule { }
