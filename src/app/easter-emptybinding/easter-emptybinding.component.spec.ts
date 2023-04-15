import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasterEmptybindingComponent } from './easter-emptybinding.component';

describe('EasterEmptybindingComponent', () => {
  let component: EasterEmptybindingComponent;
  let fixture: ComponentFixture<EasterEmptybindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EasterEmptybindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EasterEmptybindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
