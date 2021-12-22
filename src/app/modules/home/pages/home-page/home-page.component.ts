import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GenreMap } from '@core/config/genre.map';
import { CardModel } from '@core/models/card.model';
import { MovieModel } from '@core/models/movie.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  public total: number;
  public cards: CardModel[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.total = this.route.snapshot.data.trendings.results.lenght;
    this.cards = this.toCardModel(this.route.snapshot.data.trendings.results);
  }

  private toCardModel(movies: MovieModel[]): CardModel[] {
    return movies.map(movie => {
      return {
        name: movie.name,
        genre: GenreMap[movie.genre_ids[0]],
        language: movie.originalLanguage,
        poster: movie.poster_path,
        average: movie.vote_average,
        overview: movie.overview,
        date: movie.first_air_date,
      } as CardModel;
    });
  }
}
