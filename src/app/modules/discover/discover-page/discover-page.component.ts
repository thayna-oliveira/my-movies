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
  public currentPage = 1;
  public totalPages = 0;
  public currentGenre = 'all';

  constructor(private route: ActivatedRoute, private discoverService: DiscoverService) {}

  ngOnInit(): void {
    this.genres = this.route.snapshot.data.genreList.genres;
    this.movies = this.route.snapshot.data.discover.results;
    this.updateTotalPages(this.route.snapshot.data.discover.total_pages);
  }

  public searchByGenre(id: string): void {
    if (this.currentGenre !== id) {
      this.currentPage = 1;
      this.currentGenre = id;

      this.search(1);
    }
  }

  public search(pageNumber: number): void {
    this.discoverService.execute(this.currentGenre, pageNumber.toString()).subscribe(movieList => {
      this.movies = movieList.results;
      this.currentPage = Number(movieList.page);
      this.updateTotalPages(movieList.total_pages);
    });
  }

  public updateTotalPages(pageNumber: string): void {
    const pages = Number(pageNumber);
    this.totalPages = pages > 500 ? 500 : pages;
  }
}
