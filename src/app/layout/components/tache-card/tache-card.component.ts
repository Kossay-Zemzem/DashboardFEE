import { Component, Input, EventEmitter, Output, SimpleChanges } from '@angular/core';
import { EtatTache } from 'src/app/models/EtatTache';
import { Tache } from 'src/app/models/Tache';
@Component({
  selector: 'app-tache-card',
  templateUrl: './tache-card.component.html',
  styleUrls: ['./tache-card.component.css']
})
export class TacheCardComponent {
  @Input() tacheData: Tache = {
    id: 1,
    titre: 'Tâche',
    description: 'Description de la tâche',
    deadline: new Date('1999-01-15'),
    etat: EtatTache.EN_ATTENTE,
    comite: '????',
    MembresConcerne: ["????", "????", "????"],
  };
  @Output() etatChanged: EventEmitter<{ id: number, NouvelleEtat: EtatTache }> = new EventEmitter<{ id: number, NouvelleEtat: EtatTache }>(); //emitter to notify the parent component when the state is changed

  isDropdownOpen: boolean = false;
  stateSelectorData: { name: string; color: string }[] = [{ //state data used in the item-selector-pill component
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
  ngOnInit() { }
  ngOnChanges(changes: SimpleChanges) {
    /*     if (changes['tacheData'] && changes['tacheData'].currentValue) {
          const tache = changes['tacheData'].currentValue;
          this.tacheData = tache;
        } */
  }
  updateIsDropdownOpenChange(isOpen: boolean): void {
    this.isDropdownOpen = isOpen;
    console.log(this.tacheData);
  }
  updateSelectedStateChange(state: string): void {
    console.log("tache card recieved", state);
    this.tacheData.etat = state as EtatTache; //update the state of the task
    console.log("tache card has set", this.tacheData.etat);
    this.etatChanged.emit({ id: this.tacheData.id, NouvelleEtat: this.tacheData.etat }); //emit the new state to the parent component
  }
}
