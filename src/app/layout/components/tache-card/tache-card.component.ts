import { Component, Input } from '@angular/core';
import { EtatTache } from 'src/app/models/EtatTache';
import { Tache } from 'src/app/models/Tache';
@Component({
  selector: 'app-tache-card',
  templateUrl: './tache-card.component.html',
  styleUrls: ['./tache-card.component.css']
})
export class TacheCardComponent {
  @Input() tacheData = {
    id: 1,
    titre: 'Tâche',
    description: 'Description de la tâche',
    deadline: new Date('1999-01-15'),
    etat: EtatTache.EN_ATTENTE,
    comite: '????',
    nomMembresConcerne: ["????", "????", "????"],
  };
  isDropdownOpen: boolean = false;
  stateData: { name: string; color: string }[] = [{ //stae data used in the item-selector-pill component
    name: EtatTache.EN_ATTENTE,
    color: 'text-red-700 bg-red-100'
  },
  {
    name: EtatTache.EN_COURS,
    color: 'text-yellow-700 bg-yellow-100'
  },
  {
    name: EtatTache.TERMINEE,
    color: 'text-green-700 bg-green-100'
  }];
  constructor() { }
  updateIsDropdownOpenChange(isOpen: boolean): void {
    this.isDropdownOpen = isOpen;
  }
  updateSelectedStateChange(state: string): void {
    this.tacheData.etat = EtatTache[state as keyof typeof EtatTache];
  }
}
