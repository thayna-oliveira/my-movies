import { Component, OnInit } from '@angular/core';
import { MovieModel } from '@core/models/movie.model';
import { FavoritesService } from '@core/services/favorites/favorites.service';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss'],
})
export class FavoritesPageComponent implements OnInit {
  public favorites: MovieModel[];

  constructor(private favoritesService: FavoritesService) {
    this.favorites = this.favoritesService.getFavorites();
  }

  ngOnInit(): void {}
}
