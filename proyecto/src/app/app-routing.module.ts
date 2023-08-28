import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContenedorGenerosComponent} from './components/contenedor-generos/contenedor-generos.component';
import {ContenedorPeliculasPorGeneroComponent} from './components/contenedor-peliculas-por-genero/contenedor-peliculas-por-genero.component';
import {ContenedorDetalleComponent} from "./components/contenedor-detalle/contenedor-detalle.component";

const routes: Routes = [
  {path: '', component: ContenedorGenerosComponent},
  {path: 'peliculas/:nombreGenero', component: ContenedorPeliculasPorGeneroComponent},
  {path: 'detalle/:nombrePelicula', component: ContenedorDetalleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
