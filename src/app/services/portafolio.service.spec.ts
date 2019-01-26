import { TestBed } from '@angular/core/testing';

import { PortafolioService } from './portafolio.service';

describe('PortafolioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PortafolioService = TestBed.get(PortafolioService);
    expect(service).toBeTruthy();
  });
});
