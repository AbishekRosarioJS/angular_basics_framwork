import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasterPropertyComponent } from './easter-property.component';

describe('EasterPropertyComponent', () => {
  let component: EasterPropertyComponent;
  let fixture: ComponentFixture<EasterPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EasterPropertyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EasterPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
