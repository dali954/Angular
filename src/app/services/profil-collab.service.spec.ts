import { TestBed } from '@angular/core/testing';

import { ProfilCollabService } from './profil-collab.service';

describe('ProfilCollabService', () => {
  let service: ProfilCollabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfilCollabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
