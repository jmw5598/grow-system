import { TestBed } from '@angular/core/testing';

import { SystemNodeComponentService } from './system-node-component.service';

describe('SystemNodeComponentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SystemNodeComponentService = TestBed.get(SystemNodeComponentService);
    expect(service).toBeTruthy();
  });
});
