import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-fav-button',
  templateUrl: './fav-button.component.html',
  styleUrls: ['./fav-button.component.scss'],
})
export class FavButtonComponent {
  @Input() favorite = false;
  @Output() favoriteEvent = new EventEmitter();

  constructor() {}

  public clickHandler(): void {
    this.favoriteEvent.emit();
  }
}
