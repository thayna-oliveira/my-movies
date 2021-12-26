import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { MovieListModel } from '@core/models/movie-list.model';
import { PopularMoviesService } from '@core/services/popular-movies/popular-movies.service';
import { Observable } from 'rxjs';

@Injectable()
export class DiscoverResolver implements Resolve<Observable<MovieListModel>> {
  constructor(private popularMovies: PopularMoviesService) {}

  resolve(): Observable<MovieListModel> {
    return this.popularMovies.execute();
  }
}
