import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PopularMoviesModel } from '@core/models/popular-movies.model';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PopularMoviesService {
  constructor(private httpClient: HttpClient) {}

  public execute(): Observable<PopularMoviesModel> {
    const apiKey = '0f60ad592a39d4b497a0d8889bba1be2';
    const params = new HttpParams().append('api_key', apiKey);

    return this.httpClient.get<PopularMoviesModel>(environment.api.popularMovies, { params });
  }
}
