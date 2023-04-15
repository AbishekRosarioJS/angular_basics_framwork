import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasterBindingsComponent } from './easter-bindings.component';

describe('EasterBindingsComponent', () => {
  let component: EasterBindingsComponent;
  let fixture: ComponentFixture<EasterBindingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EasterBindingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EasterBindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
