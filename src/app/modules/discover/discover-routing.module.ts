import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscoverPageComponent } from './discover-page/discover-page.component';
import { DiscoverResolver } from './resolvers/discover/discover.resolver';
import { GenresResolver } from './resolvers/genres/genres.resolver';

const routes: Routes = [
  {
    path: '',
    component: DiscoverPageComponent,
    resolve: {
      genreList: GenresResolver,
      discover: DiscoverResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiscoverRoutingModule {}
