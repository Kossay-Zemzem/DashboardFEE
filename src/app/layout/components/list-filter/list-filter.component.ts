import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-filter',
  templateUrl: './list-filter.component.html',
  styleUrls: ['./list-filter.component.css']
})
export class ListFilterComponent {
  //this component is the universal version of comite-filter and will replace it later (after refacftoring intergrated service logic)
  @Input() FilterItems = [
    { name: 'item 1', value: 0, selectedState: true },
    { name: 'item 2', value: 0, selectedState: false },
    { name: 'item 3', value: 0, selectedState: false },
  ];
  selectedItem: string = this.FilterItems[0].name;
  @Output() selectedItemChange: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }
  ngOnInit(): void {
    this.FilterItems.forEach((item, index) => item.value = 0); //initialize the values of the items
  }

  onFilterButtonClick(i: number) {
    this.FilterItems.forEach((item, index) => {
      item.selectedState = i == index
    });
    this.selectedItem = this.FilterItems[i].name;
    console.log(this.selectedItem);
    this.selectedItemChange.emit(this.selectedItem);
  }
}
