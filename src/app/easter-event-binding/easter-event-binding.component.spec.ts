import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasterEventBindingComponent } from './easter-event-binding.component';

describe('EasterEventBindingComponent', () => {
  let component: EasterEventBindingComponent;
  let fixture: ComponentFixture<EasterEventBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EasterEventBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EasterEventBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
