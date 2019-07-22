import { TestBed } from '@angular/core/testing';

import { DmListService } from './dm-list.service';

describe('DmListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DmListService = TestBed.get(DmListService);
    expect(service).toBeTruthy();
  });
});
