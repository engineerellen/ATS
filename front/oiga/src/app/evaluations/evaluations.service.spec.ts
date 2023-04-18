import { TestBed } from '@angular/core/testing';

import { evaluationsService } from './evaluations.service';

describe('evaluationsService', () => {
  let service: evaluationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(evaluationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
