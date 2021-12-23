import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  @Input() title: string;
  @Input() overview: string;
  @Input() releaseDate: string;
  @Input() average: string;
  @Input() genres: string[];
  @Input() imdbId: string;

  public imdbUrl: string;

  constructor() {}

  ngOnInit(): void {
    this.imdbUrl = `https://www.imdb.com/title/${this.imdbId}`;
  }
}
