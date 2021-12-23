import { GenreModel } from './genre.model';

export interface MovieModel {
  title: string;
  origin_country: string;
  genres: GenreModel[];
  id: number;
  originalLanguage: string;
  poster_path: string;
  vote_average: number;
  overview: string;
  vote_count: number;
  backdrop_path: string;
  release_date: string;
  original_name: string;
  popularity: number;
  media_type: string;
  imdb_id: string;
}
