import { TestBed } from '@angular/core/testing';

import { RelayService } from './relay.service';

describe('RelayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RelayService = TestBed.get(RelayService);
    expect(service).toBeTruthy();
  });
});
