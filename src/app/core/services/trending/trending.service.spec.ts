import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { TrendingService } from './trending.service';

describe('TrendingService', () => {
  let service: TrendingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(TrendingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
