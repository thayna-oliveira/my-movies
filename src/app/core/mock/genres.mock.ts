import { GenreListModel } from '@core/models/genre-list.model';

export class GenresMock {
  public static mock: GenreListModel = {
    genres: [
      { id: 12, name: 'Fantasy' },
      { id: 18, name: 'Action' },
    ],
  };
}
