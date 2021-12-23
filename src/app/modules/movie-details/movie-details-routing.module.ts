import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsPageComponent } from './movie-details-page/movie-details-page.component';
import { MovieDetailsResolver } from './resolvers/movie-details/movie-details.resolver';

const routes: Routes = [
  {
    path: '',
    component: MovieDetailsPageComponent,
    resolve: {
      movieDetails: MovieDetailsResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieDetailsRoutingModule {}
