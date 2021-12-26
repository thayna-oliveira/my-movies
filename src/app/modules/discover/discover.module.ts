import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { DiscoverPageComponent } from './discover-page/discover-page.component';
import { DiscoverRoutingModule } from './discover-routing.module';
import { DiscoverResolver } from './resolvers/discover/discover.resolver';
import { GenresResolver } from './resolvers/genres/genres.resolver';

@NgModule({
  declarations: [DiscoverPageComponent],
  imports: [CommonModule, DiscoverRoutingModule, SharedModule],
  providers: [GenresResolver, DiscoverResolver],
})
export class DiscoverModule {}
