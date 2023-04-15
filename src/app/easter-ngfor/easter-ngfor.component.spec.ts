import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasterNgforComponent } from './easter-ngfor.component';

describe('EasterNgforComponent', () => {
  let component: EasterNgforComponent;
  let fixture: ComponentFixture<EasterNgforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EasterNgforComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EasterNgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
