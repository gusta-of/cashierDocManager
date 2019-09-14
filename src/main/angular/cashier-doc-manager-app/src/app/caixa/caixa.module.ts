import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaixaComponent } from './caixa.component';
import { GridCaixaComponent } from './grid-caixa/grid-caixa.component';
import {DataTableModule} from "primeng/primeng";
import {TableModule} from "primeng/table";
import { MenuLateralCaixaComponent } from './menu-lateral-caixa/menu-lateral-caixa.component';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [
    CaixaComponent,
    GridCaixaComponent,
    MenuLateralCaixaComponent,
    
  ],
  imports: [
    CommonModule,
    TableModule,
    DataTableModule,
    ButtonModule
  ],
  exports:[CaixaComponent]
})
export class CaixaModule { }
