import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-cover',
  templateUrl: './movie-cover.component.html',
  styleUrls: ['./movie-cover.component.scss'],
})
export class MovieCoverComponent implements OnInit {
  @Input() imageUrl: string;
  @Input() average: string;
  @Input() full: boolean;

  public path: string;

  constructor() {}

  ngOnInit(): void {
    this.path = `url(https://image.tmdb.org/t/p/original${this.imageUrl})`;
  }
}
