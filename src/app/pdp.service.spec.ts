import { TestBed, inject } from '@angular/core/testing';

import { PdpService } from './pdp.service';

describe('PdpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PdpService]
    });
  });

  it('should be created', inject([PdpService], (service: PdpService) => {
    expect(service).toBeTruthy();
  }));
});
