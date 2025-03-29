import { Component, OnInit } from '@angular/core';
import { MembreService } from 'src/app/services/membre.service';
import { Membre } from 'src/app/models/Membre';
import { MembreFilterServiceService } from 'src/app/services/membre-filter-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-membres-liste',
  templateUrl: './membres-liste.component.html',
  styleUrls: ['./membres-liste.component.css']
})
export class MembresListeComponent implements OnInit {
  headerItems: Array<string> = ["Nom", "Numero", "Email", "Status", "Actions"];

  data: Array<Membre> = [
    {
      id: 0, imgSrc: "",
      nom: "unknown",
      prenom: "unknown",
      numero: "unknown",
      email: "unknown",
      isLibre: true,
      comite: "unknown"
    }
  ]
  nbMemParComite: Array<number> = [0, 0, 0]; // 0 MEDIA , 0 SPONSORING , 0 LOGISTIQUE
  comiteSelected: string = "MEDIA";
  searchQuery: string = ""; //search query for the search bar


  private subscription: Subscription = new Subscription(); //subscription pour le comite selectionne

  constructor(private MemberServ: MembreService,
    private ComiteFilterServ: MembreFilterServiceService) { }

  ngOnInit(): void {
    this.MemberServ.getMembres().subscribe(dataServ => {
      this.data = dataServ;
      this.UpdateNbMembreParComite();// update the number of members per comite when the data is received
    });

    this.subscription = this.ComiteFilterServ.getComiteSelected().subscribe(comiteSelected => this.comiteSelected = comiteSelected);// ensures that the component is notified when the selected comite changes
    //N.B this.subscription is a Subscription objec which we need to be able to unsubscribe later when the object is destroyed and avoid memory leaks (ngOnDestroy is lifecycle hook).

    this.ComiteFilterServ.getSearchQuery().subscribe(searchQuery => this.searchQuery = searchQuery);// ensures that the component is notified when the search query changes

  }

  get filteredComiteMembres(): Array<Membre> { //methode qui permet de filtrer les membres par comite et l'affecter a filteredComiteMembres pour l'affichage
    if (this.searchQuery) { // If there is a search query, filter the data based on it
      return this.data.filter(membre =>
        (membre.nom + membre.prenom).toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else  // If there is no search query, filter the data based on the selected comite only
      return this.data.filter(membre => membre.comite === this.comiteSelected);
  }

  trackById(index: number, membre: Membre): number { //A methode that improves performance by tracking the id of each member and reusing existing elements instead of recreating them.
    return membre.id;
  }

  UpdateNbMembreParComite(): void {
    this.nbMemParComite = [0, 0, 0]; // 0 MEDIA , 0 SPONSORING , 0 LOGISTIQUE
    this.data.forEach(membre => {
      if (membre.comite.toUpperCase() === 'MEDIA') {
        this.nbMemParComite[0]++;
      } else if (membre.comite.toUpperCase() === 'SPONSORING') {
        this.nbMemParComite[1]++;
      } else if (membre.comite.toUpperCase() === 'LOGISTIQUE') {
        this.nbMemParComite[2]++;
      }
    });
    this.ComiteFilterServ.updateNbMembreParComite(this.nbMemParComite); //notify the subscribers of the new value 
  }

  ngOnDestroy(): void { //a methode that unsubscribes from the subscription when the component is destroyed to avoid memory leaks
    this.subscription.unsubscribe();
  }
  supprimerMembre(id: number): void {
    // Optimistically remove the member from the data array
    this.data = this.data.filter(membre => membre.id !== id);

    // Call the service to delete the member from the JSON file
    this.MemberServ.deleteMembre(id).subscribe({
      next: () => {
        console.log(`Membre with ID ${id} deleted successfully.`);
        alert('WARNING: Delete logic has not yet been implemented (user was not realy deleted)');
      },
      error: (err) => {
        console.error(`Failed to delete membre with ID ${id}:`, err);
        alert('Failed to delete the user. Please try again.');
      }
    });
    this.UpdateNbMembreParComite(); // Update the number of members per comite after deletion
  }

  modifierMembre(id: number, numero: string): void {
    // Call the service to update the member in the JSON file
    this.MemberServ.updateMembre(id, numero).subscribe({
      next: () => {
        console.log(`Membre with ID ${id} updated successfully.`);
        alert('WARNING: Update logic has not yet been implemented (user was not realy updated)');
      },
      error: (err) => {
        console.error(`Failed to update membre with ID ${id}:`, err);
        alert('Failed to update the user. Please try again.');
      }
    });
  }
}