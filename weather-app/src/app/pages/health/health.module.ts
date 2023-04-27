import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {HealthComponent} from './health.component';
import {HealthRouterModule} from './health.router';

@NgModule({
  imports: [
    CommonModule,
    HealthRouterModule
  ],
  declarations: [HealthComponent],
  exports: [HealthComponent]
})
export class HealthModule { }
