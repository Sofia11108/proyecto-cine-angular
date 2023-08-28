import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContenedorGenerosComponent } from './components/contenedor-generos/contenedor-generos.component';
import { NavComponent } from './components/nav/nav.component';
import { GenerosComponent } from './components/generos/generos.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { ContenedorDetalleComponent } from './components/contenedor-detalle/contenedor-detalle.component';
import { PeliculasPorGeneroComponent } from './components/peliculas-por-genero/peliculas-por-genero.component';
import { ContenedorPeliculasPorGeneroComponent } from './components/contenedor-peliculas-por-genero/contenedor-peliculas-por-genero.component';

@NgModule({
  declarations: [
    AppComponent,
    ContenedorGenerosComponent,
    NavComponent,
    GenerosComponent,
    DetalleComponent,
    ContenedorDetalleComponent,
    PeliculasPorGeneroComponent,
    ContenedorPeliculasPorGeneroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
