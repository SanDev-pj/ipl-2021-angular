import { TestBed } from '@angular/core/testing';

import { IplApiDataService } from './ipl-api-data.service';

describe('IplApiDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IplApiDataService = TestBed.get(IplApiDataService);
    expect(service).toBeTruthy();
  });
});
