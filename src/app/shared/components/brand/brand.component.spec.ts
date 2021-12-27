import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrandComponent } from './brand.component';

describe('BrandComponent', () => {
  let component: BrandComponent;
  let fixture: ComponentFixture<BrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BrandComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display myMovies logo', () => {
    const logo = fixture.debugElement.query(By.css('.app-brand__logo'));
    expect(logo.nativeElement.src).toContain('/assets/images/brand.svg');
  });
});
