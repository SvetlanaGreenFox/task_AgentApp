import { TestBed } from '@angular/core/testing';

import { AeroflotHigh } from './high.service';

describe('AeroflotHigh', () => {
  let service: AeroflotHigh;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AeroflotHigh);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
