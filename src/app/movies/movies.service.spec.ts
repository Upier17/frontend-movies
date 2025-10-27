import { TestBed } from '@angular/core/testing';

import { MoviesComponent } from './movies.component';

describe('Movies', () => {
  let service: MoviesComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesComponent);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
