import { MovieModel } from './movie.model';

export interface MovieListModel {
  page: number;
  results: MovieModel[];
  total_pages: number;
  total_results: number;
}
