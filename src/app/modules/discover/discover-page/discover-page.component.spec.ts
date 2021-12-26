import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppModule } from '@app/app.module';
import { GenresMock } from '@core/mock/genres.mock';
import { TrendingMock } from '@core/mock/trending.mock';
import { SharedModule } from '@shared/shared.module';
import { DiscoverPageComponent } from './discover-page.component';

describe('DiscoverPageComponent', () => {
  let component: DiscoverPageComponent;
  let fixture: ComponentFixture<DiscoverPageComponent>;
  let activatedRoute: ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DiscoverPageComponent],
      imports: [AppModule, HttpClientTestingModule, RouterTestingModule, SharedModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverPageComponent);
    activatedRoute = TestBed.inject(ActivatedRoute);
    activatedRoute.snapshot.data.discover = TrendingMock.mock;
    activatedRoute.snapshot.data.genreList = GenresMock.mock;

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
