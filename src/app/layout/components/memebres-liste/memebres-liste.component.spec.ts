import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemebresListeComponent } from './memebres-liste.component';

describe('MemebresListeComponent', () => {
  let component: MemebresListeComponent;
  let fixture: ComponentFixture<MemebresListeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MemebresListeComponent]
    });
    fixture = TestBed.createComponent(MemebresListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
