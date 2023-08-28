import { Component } from '@angular/core';
import { GENEROS} from '../../models/generos'
import { Router } from '@angular/router';

@Component({
  selector: 'app-generos',
  templateUrl: './generos.component.html',
  styleUrls: ['./generos.component.css']
})
export class GenerosComponent {

  generos = GENEROS;

  constructor(private router: Router) {

  }

  entrar(nombreGenero:String) {
    this.router.navigate(['/peliculas', nombreGenero])
  }

}
