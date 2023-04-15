import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasterPassingdataEventComponent } from './easter-passingdata-event.component';

describe('EasterPassingdataEventComponent', () => {
  let component: EasterPassingdataEventComponent;
  let fixture: ComponentFixture<EasterPassingdataEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EasterPassingdataEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EasterPassingdataEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
