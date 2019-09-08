import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosCadastroComponent } from './usuarios-cadastro/usuarios-cadastro.component';
import { UsuariosComponent } from './usuarios.component';

@NgModule({
  declarations: [
    UsuariosComponent,
    UsuariosCadastroComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [UsuariosComponent]
})
export class UsuariosModule { }
