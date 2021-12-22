import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { TrendingModel } from '@core/models/trending.model';
import { TrendingService } from '@core/services/trending/trending.service';
import { Observable } from 'rxjs';

@Injectable()
export class TrendingsResolver implements Resolve<Observable<TrendingModel>> {
  constructor(private trendingService: TrendingService) {}

  resolve(): Observable<TrendingModel> {
    return this.trendingService.execute();
  }
}
