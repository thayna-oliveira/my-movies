import { Injectable } from '@angular/core';
import { MovieModel } from '@core/models/movie.model';
import { SessionService } from '../session/session.service';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  public favorites: MovieModel[];

  constructor(private sessionService: SessionService) {
    this.favorites = this.getFavorites();
  }

  public setFavorite(favorite: MovieModel): void {
    this.favorites.push(favorite);
    this.sessionService.setSession('favorites', this.favorites);
    this.favorites = this.getFavorites();
  }

  public getFavorites(): MovieModel[] {
    return this.sessionService.getSession('favorites');
  }

  public isFavorite(movie: MovieModel): boolean {
    return this.favorites.some(favorite => favorite.id === movie.id);
  }

  public removeFavorite(movie: MovieModel): void {
    this.favorites = this.favorites.filter(favorite => favorite.id !== movie.id);
    this.sessionService.setSession('favorites', this.favorites);
  }
}
