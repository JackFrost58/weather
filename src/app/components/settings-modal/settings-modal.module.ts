import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {SettingsModalComponent} from './settings-modal.component';
import {MaterialModule} from '@shared/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [SettingsModalComponent],
  exports: [SettingsModalComponent]
})
export class SettingsModalModule { }
