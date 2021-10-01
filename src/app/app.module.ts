import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import {AppComponent} from './app.component';
import {ClientesModule} from './clientes/clientes.module';
import {ListadoClientesComponent} from "./clientes/listado-clientes/listado-clientes.component";

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    ClientesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
