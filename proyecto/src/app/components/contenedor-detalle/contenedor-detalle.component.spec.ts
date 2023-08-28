import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorDetalleComponent } from './contenedor-detalle.component';

describe('ContenedorDetalleComponent', () => {
  let component: ContenedorDetalleComponent;
  let fixture: ComponentFixture<ContenedorDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorDetalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenedorDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
