import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieModel } from '@core/models/movie.model';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieDetailsService {
  constructor(private httpClient: HttpClient) {}

  public getDetails(movieId: string): Observable<MovieModel> {
    const apiKey = '0f60ad592a39d4b497a0d8889bba1be2';
    const params = new HttpParams().append('api_key', apiKey);

    return this.httpClient.get<MovieModel>(environment.api.details + `/${movieId}`, { params });
  }
}
