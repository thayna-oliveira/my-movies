import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GenreModel } from '@core/models/genre.model';
import { MovieModel } from '@core/models/movie.model';
import { DiscoverService } from '@core/services/discover/discover.service';

@Component({
  selector: 'app-discover-page',
  templateUrl: './discover-page.component.html',
  styleUrls: ['./discover-page.component.scss'],
})
export class DiscoverPageComponent implements OnInit {
  public genres: GenreModel;
  public movies: MovieModel[];
  public currentPage: number;
  public totalPages: number;

  constructor(private route: ActivatedRoute, private discoverService: DiscoverService) {}

  ngOnInit(): void {
    this.genres = this.route.snapshot.data.genreList.genres;
    this.movies = this.route.snapshot.data.discover.results;
    this.currentPage = this.route.snapshot.data.discover.page;
    this.totalPages = this.route.snapshot.data.discover.total_pages;
  }

  public searchByGenre(id: string): void {
    this.discoverService.execute(id).subscribe(movieList => {
      this.movies = movieList.results;
      this.currentPage = movieList.page;
      this.totalPages = movieList.total_pages;
    });
  }
}
