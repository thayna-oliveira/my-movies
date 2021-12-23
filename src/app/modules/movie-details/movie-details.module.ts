import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { MovieDetailsPageComponent } from './movie-details-page/movie-details-page.component';
import { MovieDetailsRoutingModule } from './movie-details-routing.module';
import { MovieDetailsResolver } from './resolvers/movie-details/movie-details.resolver';
import { OverviewComponent } from './components/overview/overview.component';

@NgModule({
  declarations: [MovieDetailsPageComponent, OverviewComponent],
  imports: [CommonModule, MovieDetailsRoutingModule, SharedModule],
  providers: [MovieDetailsResolver],
})
export class MovieDetailsModule {}
