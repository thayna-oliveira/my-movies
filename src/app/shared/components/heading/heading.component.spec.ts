import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HeadingComponent } from './heading.component';

describe('HeadingComponent', () => {
  let component: HeadingComponent;
  let fixture: ComponentFixture<HeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeadingComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  test.each`
    level        | tag
    ${'1'}       | ${'h1'}
    ${'2'}       | ${'h2'}
    ${'3'}       | ${'h3'}
    ${undefined} | ${'h2'}
  `('given a $level level should display a $tag element', ({ level, tag }) => {
    component.level = level;
    component.title = 'Example';
    fixture.detectChanges();

    const heading = fixture.debugElement.query(By.css(tag));

    expect(heading.name).toBe(tag);
    expect(heading.nativeElement.classList[0]).toBe('app-heading');
    expect(heading.nativeElement.classList[1]).toBe(`app-heading--${tag}`);
    expect(heading.nativeElement.innerHTML).toBe('Example');
  });
});
