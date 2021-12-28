import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @ViewChild('menuToggle', { static: true }) menuToggle: ElementRef;

  public isActive = false;

  constructor() {}

  @HostListener('window:scroll')
  onScroll(): void {
    this.hideMenu();
  }

  @HostListener('document:click', ['$event'])
  onClick(event: any) {
    if (this.menuToggle.nativeElement.contains(event.target)) {
      if (!this.isActive) {
        this.showMenu();
        return;
      }
      this.hideMenu();
    } else {
      if (this.isActive) {
        this.hideMenu();
      }
    }
  }

  public showMenu(): void {
    this.isActive = true;
  }

  public hideMenu(): void {
    this.isActive = false;
  }
}
