import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SharedModule } from '@shared/shared.module';
import { NotFoundComponent } from './not-found.component';

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a generic message', () => {
    const description = fixture.debugElement.query(By.css('.description'));
    expect(description.nativeElement.innerHTML).toBe(
      'You’re either misspelling the URL or requesting a page that’s no longer here.'
    );
  });

  it('should display all elements', () => {
    component.description = 'Content not found';
    fixture.detectChanges();

    const image = fixture.debugElement.query(By.css('.image'));
    expect(image.nativeElement.src).toContain('/assets/images/page-not-found.svg');

    const heading = fixture.debugElement.query(By.css('.title'));
    expect(heading.componentInstance.title).toBe('Sorry, no results found');

    const description = fixture.debugElement.query(By.css('.description'));
    expect(description.nativeElement.innerHTML).toBe('Content not found');
  });
});
