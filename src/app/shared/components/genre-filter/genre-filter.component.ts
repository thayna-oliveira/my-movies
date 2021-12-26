import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GenreModel } from '@core/models/genre.model';

@Component({
  selector: 'app-genre-filter',
  templateUrl: './genre-filter.component.html',
  styleUrls: ['./genre-filter.component.scss'],
})
export class GenreFilterComponent implements OnInit {
  @Input() genres: GenreModel[];
  @Output() selectGenreEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public selectGenre(id: number): void {
    console.log(id);
    this.selectGenreEvent.emit(id);
  }
}
