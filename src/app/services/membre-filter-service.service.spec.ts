import { TestBed } from '@angular/core/testing';

import { MembreFilterServiceService } from './membre-filter-service.service';

describe('MembreFilterServiceService', () => {
  let service: MembreFilterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MembreFilterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
