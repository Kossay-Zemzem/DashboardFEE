import { Component, Input, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-item-selector-pill',
  templateUrl: './item-selector-pill.component.html',
  styleUrls: ['./item-selector-pill.component.css']
})
export class ItemSelectorPillComponent {
  selectedState: string = 'unkown'; // Default state
  isDropdownOpen: boolean = false;
  @Output() selectedStateChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() isDropdownOpenChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() stateData: { name: string; color: string }[] = [];
  //example data
  /*[{
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
  }]*/

  get states(): string[] {
    return this.stateData.map(state => state.name);
  }

  getStateColor(state: string): string {
    const stateObj = this.stateData.find(s => s.name === state);
    return stateObj ? stateObj.color : '';
  }
  ngOnInit() {
    // Set the default selected state to the first state in the list
    this.selectedState = this.states[0];
  }

  constructor(private elementRef: ElementRef) { }
  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
    this.isDropdownOpenChange.emit(this.isDropdownOpen); // Emit the dropdown state
  }

  selectState(state: string): void {
    this.selectedState = state;
    this.isDropdownOpen = false; // Close dropdown after selection
    this.selectedStateChange.emit(this.selectedState); // Emit the selected state
    this.isDropdownOpenChange.emit(this.isDropdownOpen); // Emit the dropdown state
  }
  // Method to close the dropdown when clicking outside
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isDropdownOpen = false;
      this.isDropdownOpenChange.emit(this.isDropdownOpen);
    }
  }

  /*   // Method to update the selected state
  updateSelectedState(newState: string): void {
    this.selectedState = newState;
  }
  translateX(state: string): string { // This method calculates the translation based on the state
    switch (state) {
      case 'pending':
        return 'translateX(-0.2rem)';
      case 'in-progress':
        return 'translateX(8rem)'; // Adjust based on button width
      case 'Terminé':
        return 'translateX(16.2rem)'; // Adjust based on button width
      default:
        return 'translateX(0rem)';
    }
  } */

}
