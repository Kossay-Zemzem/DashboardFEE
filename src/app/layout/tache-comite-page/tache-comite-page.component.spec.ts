import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TacheComitePageComponent } from './tache-comite-page.component';

describe('TacheComitePageComponent', () => {
  let component: TacheComitePageComponent;
  let fixture: ComponentFixture<TacheComitePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TacheComitePageComponent]
    });
    fixture = TestBed.createComponent(TacheComitePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
