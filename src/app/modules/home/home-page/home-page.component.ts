import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardModel } from '@core/models/card.model';
import { MovieModel } from '@core/models/movie.model';
import { SessionService } from '@core/services/session/session.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  public total: number;
  public cards: CardModel[];
  private favorites: number[];

  constructor(private route: ActivatedRoute, private sessionService: SessionService, private router: Router) {}

  ngOnInit(): void {
    this.favorites = this.sessionService.getSession('favorites');

    this.total = this.route.snapshot.data.popularMovies.results.lenght;

    this.cards = this.toCardModel(this.route.snapshot.data.popularMovies.results);
  }

  private toCardModel(movies: MovieModel[]): CardModel[] {
    return movies.map(movie => {
      return {
        id: movie.id,
        name: movie.title,
        genre: movie.genre_ids,
        language: movie.originalLanguage,
        poster: movie.poster_path,
        average: movie.vote_average,
        overview: movie.overview,
        date: movie.release_date,
        favorite: this.favorites.some(favorite => favorite === movie.id),
      } as CardModel;
    });
  }

  public changeFavorite(card: CardModel): void {
    if (card.favorite) {
      card.favorite = false;
      this.favorites = this.favorites.filter(favorite => favorite !== card.id);
      this.sessionService.setSession('favorites', this.favorites);
    } else {
      this.favorites.push(card.id);
      card.favorite = true;
      this.sessionService.setSession('favorites', this.favorites);
    }
  }

  public showDetails(id: number): void {
    this.router.navigate([`movie/${id}`]);
  }
}
