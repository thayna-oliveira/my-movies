import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MovieCoverComponent } from '@components/movie-cover/movie-cover.component';
import { AverageComponent } from './components/average/average.component';
import { BadgeComponent } from './components/badge/badge.component';
import { BrandComponent } from './components/brand/brand.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { FavButtonComponent } from './components/fav-button/fav-button.component';
import { FooterComponent } from './components/footer/footer.component';
import { GenreFilterComponent } from './components/genre-filter/genre-filter.component';
import { HeadingComponent } from './components/heading/heading.component';
import { IconComponent } from './components/icon/icon.component';
import { LinkComponent } from './components/link/link.component';
import { LoaderComponent } from './components/loader/loader.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ButtonComponent,
    BrandComponent,
    CardComponent,
    NavbarComponent,
    HeadingComponent,
    FooterComponent,
    LoaderComponent,
    IconComponent,
    FavButtonComponent,
    MovieCoverComponent,
    BadgeComponent,
    AverageComponent,
    LinkComponent,
    GenreFilterComponent,
  ],
  exports: [
    ButtonComponent,
    BrandComponent,
    CardComponent,
    NavbarComponent,
    HeadingComponent,
    FooterComponent,
    LoaderComponent,
    IconComponent,
    FavButtonComponent,
    MovieCoverComponent,
    BadgeComponent,
    AverageComponent,
    LinkComponent,
    GenreFilterComponent,
  ],
})
export class SharedModule {}
