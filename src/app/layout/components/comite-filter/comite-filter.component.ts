import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { MembreFilterServiceService } from 'src/app/services/membre-filter-service.service';
@Component({
  selector: 'app-comite-filter',
  templateUrl: './comite-filter.component.html',
  styleUrls: ['./comite-filter.component.css']
})
export class ComiteFilterComponent {
  /*   @Input() FilterItems = [
      { name: 'Media', value: 5, selectedState: true },
      { name: 'Sponsoring', value: 7, selectedState: false },
      { name: 'Logistique', value: 2, selectedState: false },
    ]; */
  @Input() FilterItems = [
    { name: 'item 1', value: 0, selectedState: true },
    { name: 'item 2', value: 0, selectedState: false },
    { name: 'item 3', value: 0, selectedState: false },
  ];
  private subscription: Subscription = new Subscription(); //subscription pour le nombre de membres par comite

  constructor(private ComiteFilterServ: MembreFilterServiceService) { }

  ngOnInit(): void {
    this.subscription = this.ComiteFilterServ.getNbMembreParComite().subscribe(nbMembreParComite => {
      this.FilterItems.forEach((item, index) => item.value = nbMembreParComite[index]); //mise a jour des valeurs des items du filtre
    });
  }
  onFilterButtonClick(i: number) {
    this.FilterItems.forEach((item, index) => {
      item.selectedState = i == index
    });
    this.ComiteFilterServ.updateComiteSelected(this.FilterItems[i].name.toUpperCase());
    this.FilterItems.forEach((item, index) => {

    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe(); //unsubscribes from the subscription when the component is destroyed to avoid memory leaks 
  }

}
