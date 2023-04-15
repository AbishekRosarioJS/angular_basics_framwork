import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasterBindingComponent } from './easter-binding.component';

describe('EasterBindingComponent', () => {
  let component: EasterBindingComponent;
  let fixture: ComponentFixture<EasterBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EasterBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EasterBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
