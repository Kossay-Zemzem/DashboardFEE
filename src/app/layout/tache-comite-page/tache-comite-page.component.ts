import { Component } from '@angular/core';
import { Tache } from 'src/app/models/Tache';
import { Subscription } from 'rxjs';
import { TacheService } from 'src/app/services/tache.service';
import { EtatTache } from 'src/app/models/EtatTache';
@Component({
  selector: 'app-tache-comite-page',
  templateUrl: './tache-comite-page.component.html',
  styleUrls: ['./tache-comite-page.component.css']
})
export class TacheComitePageComponent {
  userComite: string = "MEDIA"; //comite of the user
  FilterItems = [
    { name: 'Tous', value: 0, selectedState: true },
    { name: 'À faire ', value: 0, selectedState: false },
    { name: 'Complété', value: 0, selectedState: false },
  ];
  TachesData: Tache[] = [];
  selectedFilter: string = this.FilterItems[0].name;
  searchQuery: string = '';

  private subscription: Subscription = new Subscription();
  constructor(private tacheServ: TacheService) { };
  ngOnInit(): void {
    this.subscription = this.tacheServ.getTacheComite(this.userComite).subscribe(data => this.TachesData = data);
    console.log("FETCH DONE");
  }

  updateSeachQuery(query: string) {
    this.searchQuery = query;
    console.log(this.TachesData);
  }
  updateTacheState(id: number, newState: EtatTache): void {
    this.tacheServ.updateTacheState(id, newState).subscribe();
    console.log(newState);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
