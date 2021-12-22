import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() label: string;
  @Input() icon: string;
  @Input() type = 'primary';
  @Output() clickEvent = new EventEmitter();

  constructor() {}

  public clickButton(): any {
    this.clickEvent.emit();
  }
}
