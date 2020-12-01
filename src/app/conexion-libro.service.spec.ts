import { TestBed } from '@angular/core/testing';

import { ConexionLibroService } from './conexion-libro.service';

describe('ConexionLibroService', () => {
  let service: ConexionLibroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConexionLibroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
