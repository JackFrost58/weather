import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {MaterialModule} from '@shared/material.module';
import {WeatherInfoComponent} from './weather-info.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FontAwesomeModule,
    FormsModule
  ],
  declarations: [WeatherInfoComponent],
  exports: [WeatherInfoComponent]
})
export class WeatherInfoModule { }
