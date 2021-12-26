import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppModule } from '@app/app.module';
import { DiscoverModule } from '../../discover.module';
import { DiscoverResolver } from './discover.resolver';

describe('DiscoverResolver', () => {
  let trendingsResolver: DiscoverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, BrowserModule, HttpClientTestingModule, RouterTestingModule, DiscoverModule],
      providers: [DiscoverResolver],
    });

    trendingsResolver = TestBed.inject(DiscoverResolver);
  });

  it('should be created', () => {
    expect(trendingsResolver).toBeTruthy();
  });
});
