import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { MovieListModel } from '@core/models/movie-list.model';
import { DiscoverService } from '@core/services/discover/discover.service';
import { Observable } from 'rxjs';

@Injectable()
export class DiscoverResolver implements Resolve<Observable<MovieListModel>> {
  constructor(private discoverService: DiscoverService) {}

  resolve(): Observable<MovieListModel> {
    return this.discoverService.execute('all', '1');
  }
}
