import { MovieModel } from './movie.model';

export interface PopularMoviesModel {
  page: number;
  results: MovieModel[];
  total_pages: number;
  total_results: number;
}
