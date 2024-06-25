import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GloryComponent } from './glory.component';

describe('GloryComponent', () => {
  let component: GloryComponent;
  let fixture: ComponentFixture<GloryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GloryComponent]
    });
    fixture = TestBed.createComponent(GloryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
