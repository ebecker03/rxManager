import { TestBed } from '@angular/core/testing';

import { MedlistService } from './medlist.service';

describe('MedlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MedlistService = TestBed.get(MedlistService);
    expect(service).toBeTruthy();
  });
});
