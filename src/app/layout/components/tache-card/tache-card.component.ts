import { Component } from '@angular/core';

@Component({
  selector: 'app-tache-card',
  templateUrl: './tache-card.component.html',
  styleUrls: ['./tache-card.component.css']
})
export class TacheCardComponent {
  selectedState: string = 'En attente'; // Default state
  isDropdownOpen: boolean = false;
  stateData: { name: string; color: string }[] = [{ //stae data used in the item-selector-pill component
    name: 'En attente',
    color: 'text-red-700 bg-red-100'
  },
  {
    name: 'En cours',
    color: 'text-yellow-700 bg-yellow-100'
  },
  {
    name: 'Terminé',
    color: 'text-green-700 bg-green-100'
  }];
  constructor() { }
  updateIsDropdownOpenChange(isOpen: boolean): void {
    this.isDropdownOpen = isOpen;
  }
  updateSelectedStateChange(state: string): void {
    this.selectedState = state;
  }
}
