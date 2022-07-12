import { TestBed } from '@angular/core/testing';

import { ExtraitNaissanceService } from './extrait-naissance.service';

describe('ExtraitNaissanceService', () => {
  let service: ExtraitNaissanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtraitNaissanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
