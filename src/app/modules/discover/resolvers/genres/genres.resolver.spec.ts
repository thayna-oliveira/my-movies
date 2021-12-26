import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppModule } from '@app/app.module';
import { HomeModule } from '../../../home/home.module';
import { GenresResolver } from './genres.resolver';

describe('GenresResolver', () => {
  let genresResolver: GenresResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, BrowserModule, HttpClientTestingModule, RouterTestingModule, HomeModule],
      providers: [GenresResolver],
    });

    genresResolver = TestBed.inject(GenresResolver);
  });

  it('should be created', () => {
    expect(genresResolver).toBeTruthy();
  });
});
