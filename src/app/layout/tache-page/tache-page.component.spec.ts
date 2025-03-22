import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TachePageComponent } from './tache-page.component';

describe('TachePageComponent', () => {
  let component: TachePageComponent;
  let fixture: ComponentFixture<TachePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TachePageComponent]
    });
    fixture = TestBed.createComponent(TachePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
