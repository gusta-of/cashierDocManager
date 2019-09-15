import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaixaComponent } from './caixa.component';
import { GridCaixaComponent } from './grid-caixa/grid-caixa.component';
import { DataTableModule } from "primeng/primeng";
import { TableModule } from "primeng/table";
import { MenuLateralCaixaComponent } from './menu-lateral-caixa/menu-lateral-caixa.component';
import { ButtonModule } from 'primeng/button';
import { ValoresCaixaComponent } from './valores-caixa/valores-caixa.component';
import { InputTextModule } from 'primeng/inputtext';
import { MenuLateralComponent } from '../menu-lateral/menu-lateral.component';

import { MenuSuperiorComponent } from '../menu-superior/menu-superior.component';

import { CurrencyMaskModule } from "ng2-currency-mask";
import { CurrencyMaskConfig, CURRENCY_MASK_CONFIG } from "ng2-currency-mask/src/currency-mask.config";


export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: "right",
  allowNegative: true,
  decimal: ",",
  precision: 2,
  prefix: "",
  suffix: "",
  thousands: "."
};

@NgModule({
  declarations: [
    CaixaComponent,
    GridCaixaComponent,
    MenuLateralCaixaComponent,
    ValoresCaixaComponent,
    MenuSuperiorComponent,
    MenuLateralComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    DataTableModule,
    ButtonModule,
    InputTextModule,
    CurrencyMaskModule
  ],
  exports: [
    CaixaComponent,
    MenuLateralCaixaComponent
  ],
  providers: [
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig }
  ],
})
export class CaixaModule { }
