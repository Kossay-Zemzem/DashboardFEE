import { Component } from '@angular/core';

@Component({
  selector: 'app-comite-filter',
  templateUrl: './comite-filter.component.html',
  styleUrls: ['./comite-filter.component.css']
})
export class ComiteFilterComponent {
  FilterItems = [
    { name: 'Media', value: 5, selectedState: true },
    { name: 'Sponsoring', value: 7, selectedState: false },
    { name: 'Logistique', value: 2, selectedState: false },
  ];
  constructor() {}

  onFilterButtonClick(i:number){
    this.FilterItems.forEach((item,index) => {
      item.selectedState= i==index
    });
   }
   
}
