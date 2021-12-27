import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieModel } from '@core/models/movie.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  public total: number;
  public movies: MovieModel[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.total = this.route.snapshot.data.popularMovies.results.lenght;
    this.movies = this.route.snapshot.data.popularMovies.results;
  }
}
