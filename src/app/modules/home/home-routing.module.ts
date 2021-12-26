import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PopularMoviesResolver } from './resolvers/popular-movies/popular-movies.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    resolve: {
      popularMovies: PopularMoviesResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
