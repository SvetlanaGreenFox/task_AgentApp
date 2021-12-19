import { TestBed } from '@angular/core/testing';

import { AeroflotEconomy } from './economy.service';

describe('AeroflotEconomy', () => {
  let service: AeroflotEconomy;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AeroflotEconomy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
