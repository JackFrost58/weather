import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {DetailedWeatherComponent} from './detailed-weather.component';
import {MaterialModule} from '@shared/material.module';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    MaterialModule
  ],
  declarations: [DetailedWeatherComponent],
  exports: [DetailedWeatherComponent]
})
export class DetailedWeatherModule { }
