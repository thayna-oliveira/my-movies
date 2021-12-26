import { MovieModel } from '@core/models/movie.model';

export class MovieMock {
  public static mock: MovieModel = {
    title: 'Title',
    origin_country: 'brasil',
    genre_ids: ['12', '13'],
    id: 13232,
    original_language: 'en',
    poster_path: 'path',
    vote_average: 8,
    overview: 'overview',
    vote_count: 19,
    backdrop_path: 'url',
    release_date: '2019-08-09',
    original_name: 'Title',
    popularity: 204,
    media_type: 'tv',
    imdb_id: '201432',
  };
}
