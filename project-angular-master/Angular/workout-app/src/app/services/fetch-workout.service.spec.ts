import { TestBed } from '@angular/core/testing';

import { FetchWorkoutService } from './fetch-workout.service';

describe('FetchWorkoutService', () => {
  let service: FetchWorkoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchWorkoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
