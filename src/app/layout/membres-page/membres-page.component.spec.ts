import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembresPageComponent } from './membres-page.component';

describe('MembresPageComponent', () => {
  let component: MembresPageComponent;
  let fixture: ComponentFixture<MembresPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MembresPageComponent]
    });
    fixture = TestBed.createComponent(MembresPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
