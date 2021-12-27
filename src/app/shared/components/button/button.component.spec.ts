import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SharedModule } from '@shared/shared.module';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('givan a button label should display it', () => {
    component.label = 'Label';
    fixture.detectChanges();

    const label = fixture.debugElement.query(By.css('.label'));
    expect(label.nativeElement.innerHTML).toBe('Label');
  });

  it('given the type property should display the button with a different style', () => {
    component.type = 'secondary';
    fixture.detectChanges();

    const label = fixture.debugElement.query(By.css('.app-button--secondary'));
    expect(label.nativeElement).toBeTruthy();
  });

  it('given the button click should emit a clickEvent', () => {
    const spyEmit = jest.spyOn(component.clickEvent, 'emit');
    const button = fixture.debugElement.query(By.css('.app-button'));

    button.nativeElement.click();

    expect(spyEmit).toHaveBeenCalledTimes(1);
  });
});
