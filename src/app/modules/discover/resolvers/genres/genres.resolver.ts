import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { GenreListModel } from '@core/models/genre-list.model';
import { GenresService } from '@core/services/genres/genres.service';
import { Observable } from 'rxjs';

@Injectable()
export class GenresResolver implements Resolve<Observable<GenreListModel>> {
  constructor(private genresService: GenresService) {}

  resolve(): Observable<GenreListModel> {
    return this.genresService.execute();
  }
}
