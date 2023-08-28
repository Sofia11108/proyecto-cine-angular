import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorGenerosComponent } from './contenedor-generos.component';

describe('ContenedorGenerosComponent', () => {
  let component: ContenedorGenerosComponent;
  let fixture: ComponentFixture<ContenedorGenerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorGenerosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenedorGenerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
