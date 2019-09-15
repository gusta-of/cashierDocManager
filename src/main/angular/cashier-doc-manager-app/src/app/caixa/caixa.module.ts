import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaixaComponent } from './caixa.component';
import { GridCaixaComponent } from './grid-caixa/grid-caixa.component';
import {DataTableModule} from "primeng/primeng";
import {TableModule} from "primeng/table";
import { MenuLateralCaixaComponent } from './menu-lateral-caixa/menu-lateral-caixa.component';
import {ButtonModule} from 'primeng/button';
import { ValoresCaixaComponent } from './valores-caixa/valores-caixa.component';
import {InputTextModule} from 'primeng/inputtext';
import { MenuLateralComponent } from '../menu-lateral/menu-lateral.component';


@NgModule({
  declarations: [
    CaixaComponent,
    GridCaixaComponent,
    MenuLateralCaixaComponent,
    ValoresCaixaComponent,
    MenuLateralComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    DataTableModule,
    ButtonModule,
    InputTextModule
  ],
  exports:[
    CaixaComponent,
     MenuLateralCaixaComponent
    ]
})
export class CaixaModule { }
