import { TestBed } from '@angular/core/testing';

import { MimodeloService } from './mimodelo.service';

describe('MimodeloService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MimodeloService = TestBed.get(MimodeloService);
    expect(service).toBeTruthy();
  });
});
