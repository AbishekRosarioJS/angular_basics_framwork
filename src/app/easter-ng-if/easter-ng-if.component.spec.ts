import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasterNgIfComponent } from './easter-ng-if.component';

describe('EasterNgIfComponent', () => {
  let component: EasterNgIfComponent;
  let fixture: ComponentFixture<EasterNgIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EasterNgIfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EasterNgIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
