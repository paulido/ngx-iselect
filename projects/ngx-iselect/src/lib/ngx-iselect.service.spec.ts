import { TestBed } from '@angular/core/testing';

import { NgxIselectService } from './ngx-iselect.service';

describe('NgxIselectService', () => {
  let service: NgxIselectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxIselectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
