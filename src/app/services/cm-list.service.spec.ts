import { TestBed } from '@angular/core/testing';

import { CmListService } from './cm-list.service';

describe('CmListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CmListService = TestBed.get(CmListService);
    expect(service).toBeTruthy();
  });
});
