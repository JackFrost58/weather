import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WalletComponent} from './wallet.component';

const children: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: WalletComponent,
  },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(children)],
  exports: [],
  providers: [],
})
export class WalletRouterModule {}
