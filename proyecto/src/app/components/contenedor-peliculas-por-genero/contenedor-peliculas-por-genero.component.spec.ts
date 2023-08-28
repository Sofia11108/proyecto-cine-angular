import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorPeliculasPorGeneroComponent } from './contenedor-peliculas-por-genero.component';

describe('ContenedorPeliculasPorGeneroComponent', () => {
  let component: ContenedorPeliculasPorGeneroComponent;
  let fixture: ComponentFixture<ContenedorPeliculasPorGeneroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorPeliculasPorGeneroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenedorPeliculasPorGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
