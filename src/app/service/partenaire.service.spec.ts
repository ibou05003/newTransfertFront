import { TestBed } from '@angular/core/testing';

import { PartenaireService } from './partenaire.service';

describe('PartenaireService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PartenaireService = TestBed.get(PartenaireService);
    expect(service).toBeTruthy();
  });
});
