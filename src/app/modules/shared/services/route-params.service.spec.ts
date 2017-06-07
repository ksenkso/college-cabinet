import { TestBed, inject } from '@angular/core/testing';

import { RouteParamsService } from './route-params.service';

describe('RouteParamsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouteParamsService]
    });
  });

  it('should ...', inject([RouteParamsService], (service: RouteParamsService) => {
    expect(service).toBeTruthy();
  }));
});
