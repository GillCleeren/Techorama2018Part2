import { TestBed, inject } from '@angular/core/testing';

import { MockTaskService } from './mock-task.service';

describe('MockTaskService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockTaskService]
    });
  });

  it('should be created', inject([MockTaskService], (service: MockTaskService) => {
    expect(service).toBeTruthy();
  }));
});
