import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { GenreModel } from '@core/models/genre.model';

@Component({
  selector: 'app-genre-filter',
  templateUrl: './genre-filter.component.html',
  styleUrls: ['./genre-filter.component.scss'],
})
export class GenreFilterComponent implements OnInit {
  @Input() genres: GenreModel[];
  @Output() selectGenreEvent = new EventEmitter();

  @ViewChild('menu', { static: false })
  containerMenu: ElementRef;

  public selected: number;
  public showFadeLeft = false;
  public showFadeRight = false;

  constructor() {}

  ngOnInit(): void {}

  public selectGenre(id: number): void {
    this.selectGenreEvent.emit(id);
    this.selected = id;
  }

  public showFade(): void {
    const element = this.containerMenu.nativeElement;
    const scrollSize = element.scrollLeft;
    const position = element.scrollWidth - element.offsetWidth;

    this.showFadeLeft = scrollSize > 0;
    this.showFadeRight = scrollSize < position;
  }
}
