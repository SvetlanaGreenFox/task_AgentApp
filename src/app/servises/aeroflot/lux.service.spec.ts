import { TestBed } from '@angular/core/testing';

import { AeroflotLux } from './lux.service';

describe('AeroflotLux', () => {
  let service: AeroflotLux;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AeroflotLux);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
