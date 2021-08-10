import { TestBed } from '@angular/core/testing';

import { 403interceptorService } from './403interceptor.service';

describe('403interceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: 403interceptorService = TestBed.get(403interceptorService);
    expect(service).toBeTruthy();
  });
});
