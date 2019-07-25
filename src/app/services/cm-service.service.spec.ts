import { TestBed } from '@angular/core/testing';

import { CmServiceService } from './cm-service.service';

describe('CmServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CmServiceService = TestBed.get(CmServiceService);
    expect(service).toBeTruthy();
  });
});
