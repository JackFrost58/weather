import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '@shared/material.module';
import {HeaderInfoComponent} from './header-info.component';
import localeRu from '@angular/common/locales/ru';
import {registerLocaleData} from '@angular/common';

registerLocaleData(localeRu)

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
  ],
  declarations: [HeaderInfoComponent],
  exports: [HeaderInfoComponent]
})
export class HeaderInfoModule { }
