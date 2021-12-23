import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { MovieModel } from '@core/models/movie.model';
import { MovieDetailsService } from '@core/services/movie-details/movie-details.service';
import { Observable } from 'rxjs';

@Injectable()
export class MovieDetailsResolver implements Resolve<Observable<MovieModel>> {
  constructor(private movieDetailsService: MovieDetailsService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<MovieModel> {
    return this.movieDetailsService.getDetails(route.paramMap.get('id') || '');
  }
}
