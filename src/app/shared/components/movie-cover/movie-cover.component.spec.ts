import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SharedModule } from '@shared/shared.module';
import { MovieCoverComponent } from './movie-cover.component';

describe('MovieCoverComponent', () => {
  let component: MovieCoverComponent;
  let fixture: ComponentFixture<MovieCoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('given an imageUrl should display it', () => {
    component.imageUrl = '/example.png';
    component.ngOnInit();
    fixture.detectChanges();

    const movieCover = fixture.debugElement.query(By.css('.movie-cover'));
    expect(movieCover.styles['background-image']).toBe('url(https://image.tmdb.org/t/p/original/example.png)');
  });

  it('given an average should display it', () => {
    component.average = '9';
    fixture.detectChanges();

    const average = fixture.debugElement.query(By.css('.average'));
    expect(average.nativeElement).toBeTruthy();
    expect(average.componentInstance.average).toBe('9');
  });

  it('given the property full should display a full cover', () => {
    component.full = true;
    fixture.detectChanges();

    const movieCover = fixture.debugElement.query(By.css('.movie-cover'));
    expect(movieCover.nativeElement.classList).toContain('movie-cover--full');
  });
});
