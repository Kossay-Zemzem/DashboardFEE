import { Component } from '@angular/core';

@Component({
  selector: 'app-tache-comite-page',
  templateUrl: './tache-comite-page.component.html',
  styleUrls: ['./tache-comite-page.component.css']
})
export class TacheComitePageComponent {
  FilterItems = [
    { name: 'Tous', value: 0, selectedState: true },
    { name: 'À faire ', value: 0, selectedState: false },
    { name: 'Complété', value: 0, selectedState: false },
  ];
  selectedItem: string = this.FilterItems[0].name;
  searchQuery: string = '';
  updateSeachQuery(query: string) {
    this.searchQuery = query;
  }
}
