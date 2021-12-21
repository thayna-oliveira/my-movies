import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

const eventSubject = new ReplaySubject<RouterEvent>(1);

const routeMocker = {
  navigate: jest.fn(),
  events: eventSubject.asObservable(),
  url: 'test/url',
};

const activatedRouteMock = {
  queryParams: undefined,
};

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, HttpClientTestingModule],
      providers: [
        { provide: Router, useValue: routeMocker },
        { provide: ActivatedRoute, useValue: activatedRouteMock },
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    expect(app).toBeTruthy();
  });
});
