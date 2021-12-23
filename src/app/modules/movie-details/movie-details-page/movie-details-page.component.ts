import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieModel } from '@core/models/movie.model';

@Component({
  selector: 'app-movie-details-page',
  templateUrl: './movie-details-page.component.html',
  styleUrls: ['./movie-details-page.component.scss'],
})
export class MovieDetailsPageComponent implements OnInit {
  public movie: MovieModel;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.movie = this.route.snapshot.data.movieDetails;
  }
}
