import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {WalletComponent} from './wallet.component';
import {WalletRouterModule} from './wallet.router';
import {HeaderInfoModule} from '@shared/components/header-info/header-info.module';
import {MaterialModule} from '@shared/material.module';

@NgModule({
  imports: [
    CommonModule,
    WalletRouterModule,
    HeaderInfoModule,
    MaterialModule
  ],
  declarations: [WalletComponent],
  exports: [WalletComponent]
})
export class WalletModule { }
