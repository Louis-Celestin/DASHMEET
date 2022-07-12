import { TestBed } from '@angular/core/testing';

import { ServiceUtilisateursService } from './service-utilisateurs.service';

describe('ServiceUtilisateursService', () => {
  let service: ServiceUtilisateursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceUtilisateursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
