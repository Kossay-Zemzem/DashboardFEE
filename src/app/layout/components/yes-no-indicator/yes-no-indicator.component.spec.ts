import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YesNoIndicatorComponent } from './yes-no-indicator.component';

describe('YesNoIndicatorComponent', () => {
  let component: YesNoIndicatorComponent;
  let fixture: ComponentFixture<YesNoIndicatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YesNoIndicatorComponent]
    });
    fixture = TestBed.createComponent(YesNoIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
