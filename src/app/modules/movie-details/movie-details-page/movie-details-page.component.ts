import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetailsModel } from '@core/models/movie-details.model';

@Component({
  selector: 'app-movie-details-page',
  templateUrl: './movie-details-page.component.html',
  styleUrls: ['./movie-details-page.component.scss'],
})
export class MovieDetailsPageComponent implements OnInit {
  public movieDetails: MovieDetailsModel;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.movieDetails = this.route.snapshot.data.movieDetails;
  }
}
