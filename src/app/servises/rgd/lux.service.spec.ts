import { TestBed } from '@angular/core/testing';

import { LuxService } from './lux.service';

describe('LuxService', () => {
  let service: LuxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LuxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
