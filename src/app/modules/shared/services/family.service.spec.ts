import { TestBed, inject } from '@angular/core/testing';

import { FamilyService } from './family.service';

describe('FamilyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FamilyService]
    });
  });

  it('should ...', inject([FamilyService], (service: FamilyService) => {
    expect(service).toBeTruthy();
  }));
});
