import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppModule } from '@app/app.module';
import { HomeModule } from '../../home.module';
import { TrendingsResolver } from './trendings.resolver';

describe('TrendingsResolver', () => {
  let trendingsResolver: TrendingsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, BrowserModule, HttpClientTestingModule, RouterTestingModule, HomeModule],
      providers: [TrendingsResolver],
    });

    trendingsResolver = TestBed.inject(TrendingsResolver);
  });

  it('should be created', () => {
    expect(trendingsResolver).toBeTruthy();
  });
});
