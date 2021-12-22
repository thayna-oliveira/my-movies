import { MovieModel } from './movie.model';

export interface TrendingModel {
  page: number;
  results: MovieModel[];
  total_pages: number;
  total_results: number;
}
