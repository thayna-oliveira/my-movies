import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieModel } from '@core/models/movie.model';
import { FavoritesService } from '@core/services/favorites/favorites.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() movie: MovieModel;

  public favorite = false;

  constructor(private router: Router, private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    this.favorite = this.favoritesService.isFavorite(this.movie);
  }

  public showDetails(): void {
    this.router.navigate([`movie/${this.movie.id}`]);
  }

  public changeFavorite(): void {
    if (this.favorite) {
      this.favoritesService.removeFavorite(this.movie);
      this.favorite = false;
    } else {
      this.favoritesService.setFavorite(this.movie);
      this.favorite = true;
    }

    console.log(this.favoritesService.getFavorites());
  }
}
