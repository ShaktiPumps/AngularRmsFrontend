import { TestBed } from '@angular/core/testing';

import { KalpavrikshaService } from './kalpavriksha.service';

describe('KalpavrikshaService', () => {
  let service: KalpavrikshaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KalpavrikshaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
