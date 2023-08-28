import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {PELICULAS} from '../../models/peliculas'


@Component({
  selector: 'app-peliculas-por-genero',
  templateUrl: './peliculas-por-genero.component.html',
  styleUrls: ['./peliculas-por-genero.component.css']
})
export class PeliculasPorGeneroComponent {

  peliculas = PELICULAS
  nombreGen: String = "";
  peliculasMostrar: any[] = [];

  constructor(private routeActivate: ActivatedRoute, private router: Router){
  } 

  ngOnInit(): void {
    this.nombreGen = this.routeActivate.snapshot.params["nombreGenero"];
    this.peliculas.forEach((pelicula) => {
      if (pelicula.genero == this.nombreGen){
        this.peliculasMostrar.push(pelicula)
      }
    })
  }

  verDetalles(nombrePeli:String) {
    this.router.navigate(['/detalle', nombrePeli])
  }
}
