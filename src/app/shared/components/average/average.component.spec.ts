import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SharedModule } from '@shared/shared.module';
import { AverageComponent } from './average.component';

describe('AverageComponent', () => {
  let component: AverageComponent;
  let fixture: ComponentFixture<AverageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('given an average number then should display it', () => {
    component.average = '9';
    fixture.detectChanges();

    const average = fixture.debugElement.query(By.css('.average'));
    expect(average.nativeElement.innerHTML).toBe('9.0');
  });

  it('should display the icon', () => {
    const icon = fixture.debugElement.query(By.css('.app-icon'));
    expect(icon.componentInstance.iconType).toBe('star');
  });
});
