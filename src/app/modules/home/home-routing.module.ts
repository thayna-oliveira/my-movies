import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { TrendingsResolver } from './resolvers/trendings/trendings.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    resolve: {
      trendings: TrendingsResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
