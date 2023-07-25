import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {HeaderInfoModule} from '@components/header-info/header-info.module';
import {MaterialModule} from '@shared/material.module';
import {HealthComponent} from './health.component';
import {HealthRouterModule} from './health.router';

@NgModule({
  imports: [
    CommonModule,
    HealthRouterModule,
    HeaderInfoModule,
    MaterialModule
  ],
  declarations: [HealthComponent],
  exports: [HealthComponent]
})
export class HealthModule { }
