import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueJewlleryComponent } from './blue-jewllery.component';

describe('BlueJewlleryComponent', () => {
  let component: BlueJewlleryComponent;
  let fixture: ComponentFixture<BlueJewlleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlueJewlleryComponent]
    });
    fixture = TestBed.createComponent(BlueJewlleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
