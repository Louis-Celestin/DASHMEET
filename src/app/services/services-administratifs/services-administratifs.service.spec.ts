import { TestBed } from '@angular/core/testing';

import { ServicesAdministratifsService } from './services-administratifs.service';

describe('ServicesAdministratifsService', () => {
  let service: ServicesAdministratifsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesAdministratifsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
