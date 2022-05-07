import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraComponent } from './componente/barra/barra.component';
import { InicioComponent } from './componente/inicio/inicio.component';
import { Porsche911Component } from './componente/porsche911/porsche911.component';
import { MercedesAMGComponent } from './componente/mercedes-amg/mercedes-amg.component';
import { NisanGTRComponent } from './componente/nisan-gtr/nisan-gtr.component';
import { FordComponent } from './componente/ford/ford.component';
import { FooterComponent } from './componente/footer/footer.component';
import { FormularioComponent } from './componente/formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraComponent,
    InicioComponent,
    Porsche911Component,
    MercedesAMGComponent,
    NisanGTRComponent,
    FordComponent,
    FooterComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
