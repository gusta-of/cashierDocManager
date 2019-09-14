import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaixaComponent } from './caixa.component';
import { GridCaixaComponent } from './grid-caixa/grid-caixa.component';
import {DataTableModule} from "primeng/primeng";
import {TableModule} from "primeng/table";


@NgModule({
  declarations: [
    CaixaComponent,
    GridCaixaComponent,
    
  ],
  imports: [
    CommonModule,
    TableModule,
    DataTableModule
  ],
  exports:[CaixaComponent]
})
export class CaixaModule { }
