import { TestBed } from '@angular/core/testing';

import { RgdLux } from './lux.service';

describe('RgdLux', () => {
  let service: RgdLux;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RgdLux);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
