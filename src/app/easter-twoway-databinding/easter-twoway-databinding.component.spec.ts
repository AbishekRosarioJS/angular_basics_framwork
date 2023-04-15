import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasterTwowayDatabindingComponent } from './easter-twoway-databinding.component';

describe('EasterTwowayDatabindingComponent', () => {
  let component: EasterTwowayDatabindingComponent;
  let fixture: ComponentFixture<EasterTwowayDatabindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EasterTwowayDatabindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EasterTwowayDatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
