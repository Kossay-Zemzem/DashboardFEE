import { Component } from '@angular/core';

@Component({
  selector: 'app-tache-comite-page',
  templateUrl: './tache-comite-page.component.html',
  styleUrls: ['./tache-comite-page.component.css']
})
export class TacheComitePageComponent {
  FilterItems = [
    { name: 'Tous', value: 5, selectedState: true },
    { name: 'À faire ', value: 7, selectedState: false },
    { name: 'Complété', value: 2, selectedState: false },
  ];
}
