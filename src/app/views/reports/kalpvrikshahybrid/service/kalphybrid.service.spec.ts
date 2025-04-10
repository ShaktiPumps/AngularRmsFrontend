import { TestBed } from '@angular/core/testing';

import { KalphybridService } from './kalphybrid.service';

describe('KalphybridService', () => {
  let service: KalphybridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KalphybridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
