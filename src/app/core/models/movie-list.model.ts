import { MovieModel } from './movie.model';

export interface MovieListModel {
  page: string;
  results: MovieModel[];
  total_pages: string;
  total_results: string;
}
