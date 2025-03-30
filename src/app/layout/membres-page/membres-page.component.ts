import { Component } from '@angular/core';
import { MembreFilterServiceService } from 'src/app/services/membre-filter-service.service';
import { MembreService } from 'src/app/services/membre.service';

@Component({
  selector: 'app-membres-page',
  templateUrl: './membres-page.component.html',
  styleUrls: ['./membres-page.component.css']
})
export class MembresPageComponent {
  FilterItems = [
    { name: 'Media', value: 5, selectedState: true },
    { name: 'Sponsoring', value: 7, selectedState: false },
    { name: 'Logistique', value: 2, selectedState: false },
  ];
  searchQuery: string = '';
  constructor(private MembreServ: MembreFilterServiceService) { }
  updateSeachQuery(query: string): void {
    this.MembreServ.updateSearchQuery(query);
    this.searchQuery = query;
  }
}
