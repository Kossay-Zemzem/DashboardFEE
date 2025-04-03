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
    { name: 'À faire', value: 0, selectedState: false },
    { name: 'Complété', value: 0, selectedState: false },
  ];
  TachesData: Tache[] = [];
  selectedStateFilter: string = EtatTache.EN_ATTENTE;
  searchQuery: string = '';

  private subscription: Subscription = new Subscription();
  constructor(private tacheServ: TacheService) {

  };
  ngOnInit(): void {
    this.subscription = this.tacheServ.getTacheComite(this.userComite).subscribe(data => {
      this.TachesData = data;
      this.updateNbTachesParEtat(); // update the number of tasks per state when the data is received
    });
    console.log("FETCH DONE");
  }

  updateSeachQuery(query: string) {
    this.searchQuery = query;
    console.log(this.selectedStateFilter);
  }
  updateTacheState(id: number, newState: EtatTache): void {
    this.tacheServ.updateTacheState(id, newState).subscribe();
    this.updateNbTachesParEtat();
    console.log(newState);
  }
  get getTacheByState(): Tache[] {
    /* return this.TachesData.filter(tache => tache.etat === this.selectedStateFilter); */
    if (this.searchQuery) { // If there is a search query, filter the data based on it
      return this.TachesData.filter(tache =>
        (tache.titre).toLowerCase().includes(this.searchQuery.toLowerCase()));
    } else {
      switch (this.selectedStateFilter) {
        case 'Tous':
          return this.TachesData;
        case 'À faire':
          return this.TachesData.filter(tache => tache.etat === EtatTache.EN_ATTENTE);
        case 'Complété':
          return this.TachesData.filter(tache => tache.etat === EtatTache.TERMINEE);
      }
    }
    return this.TachesData; // Default case, return all tasks
  }
  updateNbTachesParEtat(): void {
    this.FilterItems[0].value = this.TachesData.length;
    this.FilterItems[1].value = this.TachesData.filter(tache => tache.etat === EtatTache.EN_ATTENTE).length;
    this.FilterItems[2].value = this.TachesData.filter(tache => tache.etat === EtatTache.TERMINEE).length;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
