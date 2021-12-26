import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppModule } from '@app/app.module';
import { HomeModule } from '../../home.module';
import { PopularMoviesResolver } from './popular-movies.resolver';

describe('PopularMoviesResolver', () => {
  let popularMoviesResolver: PopularMoviesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, BrowserModule, HttpClientTestingModule, RouterTestingModule, HomeModule],
      providers: [PopularMoviesResolver],
    });

    popularMoviesResolver = TestBed.inject(PopularMoviesResolver);
  });

  it('should be created', () => {
    expect(popularMoviesResolver).toBeTruthy();
  });
});
