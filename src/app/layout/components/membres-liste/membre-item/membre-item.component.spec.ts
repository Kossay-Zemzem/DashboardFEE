import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembreItemComponent } from './membre-item.component';

describe('MembreItemComponent', () => {
  let component: MembreItemComponent;
  let fixture: ComponentFixture<MembreItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MembreItemComponent]
    });
    fixture = TestBed.createComponent(MembreItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
