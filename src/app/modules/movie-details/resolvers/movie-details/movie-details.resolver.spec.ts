import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppModule } from '@app/app.module';
import { MovieDetailsModule } from '../../movie-details.module';
import { MovieDetailsResolver } from './movie-details.resolver';

describe('MovieDetailsResolver', () => {
  let movieDetailsResolver: MovieDetailsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, BrowserModule, HttpClientTestingModule, RouterTestingModule, MovieDetailsModule],
      providers: [MovieDetailsResolver],
    });

    movieDetailsResolver = TestBed.inject(MovieDetailsResolver);
  });

  it('should be created', () => {
    expect(movieDetailsResolver).toBeTruthy();
  });
});
