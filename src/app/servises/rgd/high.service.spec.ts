import { TestBed } from '@angular/core/testing';

import { RgdHigh } from './high.service';

describe('RgdHigh', () => {
  let service: RgdHigh;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RgdHigh);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
