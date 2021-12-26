import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'movie/:id',
    loadChildren: () => import('./modules/movie-details/movie-details.module').then(m => m.MovieDetailsModule),
  },
  {
    path: 'discover',
    loadChildren: () => import('./modules/discover/discover.module').then(m => m.DiscoverModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
