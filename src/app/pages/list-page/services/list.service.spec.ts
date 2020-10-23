import { TestBed } from '@angular/core/testing';

import { ListFilterService } from './list.service';

describe('ListService', () => {
  let service: ListFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
