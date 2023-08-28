import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PELICULAS } from "../../models/peliculas";


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  nombrePelicula: String = "";
  peliculas = PELICULAS;
  detallePeli: any;

  constructor(private routeActivate: ActivatedRoute){
  }

  //este metodo es el primero que se ejecuta
  ngOnInit(): void {
    this.nombrePelicula = this.routeActivate.snapshot.params["nombrePelicula"];
    this.peliculas.forEach((pelicula) => {
      if (pelicula.nombre == this.nombrePelicula){
        this.detallePeli = pelicula     
      }
    })
  }

}