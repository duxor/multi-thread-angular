import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationFormComponent } from './calculation-form.component';
import { ReactiveFormsModule } from "@angular/forms";

describe('CalculationFormComponent', () => {
  let component: CalculationFormComponent;
  let fixture: ComponentFixture<CalculationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalculationFormComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
