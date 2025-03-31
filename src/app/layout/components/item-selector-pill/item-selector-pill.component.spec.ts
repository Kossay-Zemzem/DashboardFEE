import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSelectorPillComponent } from './item-selector-pill.component';

describe('ItemSelectorPillComponent', () => {
  let component: ItemSelectorPillComponent;
  let fixture: ComponentFixture<ItemSelectorPillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemSelectorPillComponent]
    });
    fixture = TestBed.createComponent(ItemSelectorPillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
