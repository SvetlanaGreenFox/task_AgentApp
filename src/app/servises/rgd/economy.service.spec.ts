import { TestBed } from '@angular/core/testing';

import { RgdEconomy } from './economy.service';

describe('RgdEconomy', () => {
  let service: RgdEconomy;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RgdEconomy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
