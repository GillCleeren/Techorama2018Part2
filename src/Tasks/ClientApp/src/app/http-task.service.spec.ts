import { TestBed, inject } from '@angular/core/testing';

import { HttpTaskService } from './http-task.service';

describe('HttpTaskService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpTaskService]
    });
  });

  it('should be created', inject([HttpTaskService], (service: HttpTaskService) => {
    expect(service).toBeTruthy();
  }));
});
