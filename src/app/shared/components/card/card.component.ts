import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() title: string;
  @Input() overview: string;
  @Input() image: string;
  @Input() releaseDate: string;
  @Input() popularity: string;
  @Input() genre: string;
  @Input() favorite: boolean;
  @Output() favoriteEvent = new EventEmitter();
  @Output() detailsEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public favoriteHandler(): void {
    this.favoriteEvent.emit();
  }

  public showDetails(): void {
    this.detailsEvent.emit();
  }
}
