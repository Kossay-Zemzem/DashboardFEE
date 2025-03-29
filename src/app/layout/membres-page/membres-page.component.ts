import { Component } from '@angular/core';
import { MembreFilterServiceService } from 'src/app/services/membre-filter-service.service';
import { MembreService } from 'src/app/services/membre.service';

@Component({
  selector: 'app-membres-page',
  templateUrl: './membres-page.component.html',
  styleUrls: ['./membres-page.component.css']
})
export class MembresPageComponent {

  constructor(private MembreServ: MembreFilterServiceService) { }
  updateSeachQuery(query: string): void {
    this.MembreServ.updateSearchQuery(query);
  }
}
