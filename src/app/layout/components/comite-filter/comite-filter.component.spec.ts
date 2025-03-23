import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComiteFilterComponent } from './comite-filter.component';

describe('ComiteFilterComponent', () => {
  let component: ComiteFilterComponent;
  let fixture: ComponentFixture<ComiteFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComiteFilterComponent]
    });
    fixture = TestBed.createComponent(ComiteFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
