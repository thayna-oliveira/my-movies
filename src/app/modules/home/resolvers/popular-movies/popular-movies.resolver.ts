import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { PopularMoviesModel } from '@core/models/popular-movies.model';
import { PopularMoviesService } from '@core/services/popular-movies/popular-movies.service';
import { Observable } from 'rxjs';

@Injectable()
export class PopularMoviesResolver implements Resolve<Observable<PopularMoviesModel>> {
  constructor(private popularMoviesService: PopularMoviesService) {}

  resolve(): Observable<PopularMoviesModel> {
    return this.popularMoviesService.execute();
  }
}
