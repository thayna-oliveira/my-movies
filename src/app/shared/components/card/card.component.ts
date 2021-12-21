import { Component, Input, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}
}
