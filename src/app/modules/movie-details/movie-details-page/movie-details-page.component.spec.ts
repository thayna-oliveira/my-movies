import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MovieMock } from '@core/mock/movie.mock';
import { SharedModule } from '@shared/shared.module';
import { MovieDetailsModule } from '../movie-details.module';
import { MovieDetailsPageComponent } from './movie-details-page.component';

describe('MovieDetailsPageComponent', () => {
  let component: MovieDetailsPageComponent;
  let fixture: ComponentFixture<MovieDetailsPageComponent>;
  let activatedRoute: ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, MovieDetailsModule, RouterTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    activatedRoute = TestBed.inject(ActivatedRoute);
    activatedRoute.snapshot.data.movieDetails = MovieMock.mock;

    fixture = TestBed.createComponent(MovieDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
