import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  @Input() iconType: string;
  @Input() size = 'small';

  public path: string;
  public className: string;

  constructor() {}

  ngOnInit(): void {
    this.path = `/assets/icons/${this.iconType}.svg#${this.iconType}-icon`;
    this.className = `app-icon__icon--${this.size}`;
  }
}
