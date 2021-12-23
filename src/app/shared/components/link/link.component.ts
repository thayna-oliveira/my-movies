import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
})
export class LinkComponent {
  @Input() label: string;
  @Input() redirectTo: string;
  @Input() icon: string;

  constructor() {}
}
