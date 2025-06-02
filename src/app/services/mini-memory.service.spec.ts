import { TestBed } from '@angular/core/testing';

import { MiniMemoryService } from './mini-memory.service';

describe('GameServiceService', () => {
  let service: MiniMemoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiniMemoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
