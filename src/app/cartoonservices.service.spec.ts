import { TestBed } from '@angular/core/testing';

import { CartoonservicesService } from './cartoonservices.service';

describe('CartoonservicesService', () => {
  let service: CartoonservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartoonservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
