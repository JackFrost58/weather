import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {WalletComponent} from './wallet.component';
import {WalletRouterModule} from './wallet.router';

@NgModule({
  imports: [
    CommonModule,
    WalletRouterModule
  ],
  declarations: [WalletComponent],
  exports: [WalletComponent]
})
export class WalletModule { }
