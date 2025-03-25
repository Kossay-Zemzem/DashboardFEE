import { Component } from '@angular/core';
import { MembreFilterServiceService } from 'src/app/services/membre-filter-service.service';
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
  constructor(private ComiteFilterServ:MembreFilterServiceService) {}

  onFilterButtonClick(i:number){
    this.FilterItems.forEach((item,index) => {
      item.selectedState= i==index
    });
    this.ComiteFilterServ.updateComiteSelected(this.FilterItems[i].name.toUpperCase());
   }
   ngOnChanges():void{
    
  }
   
}
