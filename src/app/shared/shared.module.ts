import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrandComponent } from './components/brand/brand.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { HeadingComponent } from './components/heading/heading.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ButtonComponent, BrandComponent, CardComponent, NavbarComponent, HeadingComponent],
  exports: [ButtonComponent, BrandComponent, CardComponent, NavbarComponent, HeadingComponent],
})
export class SharedModule {}
