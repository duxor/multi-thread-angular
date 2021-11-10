import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiThreadComponent } from './multi-thread.component';

describe('MultiThreadComponent', () => {
  let component: MultiThreadComponent;
  let fixture: ComponentFixture<MultiThreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MultiThreadComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiThreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
