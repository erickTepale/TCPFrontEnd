import { TestBed } from '@angular/core/testing';

import { CmChatService } from './cm-chat.service';

describe('CmChatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CmChatService = TestBed.get(CmChatService);
    expect(service).toBeTruthy();
  });
});
