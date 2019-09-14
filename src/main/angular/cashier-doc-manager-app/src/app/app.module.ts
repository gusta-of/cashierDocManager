import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AccordionModule} from 'primeng/accordion';    
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {ButtonModule} from 'primeng/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { UsuariosModule } from './usuarios/usuarios.module';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { CaixaModule } from './caixa/caixa.module';
import {DataTableModule} from "primeng/primeng";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuLateralComponent,
    MenuLateralComponent,
  ],
  imports: [
    BrowserModule,
    AccordionModule,
    AppRoutingModule,
    ButtonModule,
    BrowserAnimationsModule,
    UsuariosModule,
    CaixaModule,
    DataTableModule
  ],
  exports:[
    DataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
