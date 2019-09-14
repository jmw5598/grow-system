import { TestBed } from '@angular/core/testing';

import { SseService } from './sse.service';

describe('SseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SseService = TestBed.get(SseService);
    expect(service).toBeTruthy();
  });
});
