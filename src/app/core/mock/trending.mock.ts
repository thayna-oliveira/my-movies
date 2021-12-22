export class TrendingMock {
  public static mock: TrendingMock = {
    page: 1,
    results: [
      {
        origin_country: 'Brazil',
        genre_ids: [12],
        id: '105',
        originalLanguage: 'en',
        poster_path: 'img',
        vote_average: '9',
        overview: 'Moview overview',
        vote_count: '90.0',
        backdrop_path: 'image',
        name: 'Movie Name',
        first_air_date: '2019-09-09',
        original_name: 'Original Name',
        popularity: '290.0',
        media_type: 'tv',
      },
    ],
    total_pages: 10,
    total_results: 10,
  };
}
