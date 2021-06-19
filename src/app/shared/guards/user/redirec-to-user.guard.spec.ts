import { TestBed } from '@angular/core/testing';

import { RedirecToUserGuard } from './redirec-to-user.guard';

describe('RedirecToUserGuard', () => {
  let guard: RedirecToUserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RedirecToUserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
