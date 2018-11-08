import { TestBed } from '@angular/core/testing';

import { JackService } from './jack.service';

describe('JackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JackService = TestBed.get(JackService);
    expect(service).toBeTruthy();
  });
});
