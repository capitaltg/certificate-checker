import { TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { SearchService } from './search.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('SearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
}));

  it('should be created', () => {
    const service: SearchService = TestBed.inject(SearchService);
    expect(service).toBeTruthy();
  });
});
