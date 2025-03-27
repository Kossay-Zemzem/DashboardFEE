import { Component,OnInit } from '@angular/core';
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
  headerItems:Array<string> = ["Nom","Numero","Email" ,"Status" ,"Actions"];
  
  data:Array<Membre>=[
    {id:0,imgSrc:"",
      nom:"unknown",
      prenom:"unknown",
      numero:"unknown",
      email:"unknown",
      isLibre:true,
      comite:"unknown"}
    ]
    nbMemParComite:Array<number>=[0,0,0]; // 0 MEDIA , 0 SPONSORING , 0 LOGISTIQUE

    comiteSelected:string="MEDIA";
    private subscription: Subscription = new Subscription(); //subscription pour le comite selectionne

  constructor(private MemberServ:MembreService,
    private ComiteFilterServ:MembreFilterServiceService ) {}
    
    ngOnInit():void{
    this.MemberServ.getMembres().subscribe(dataServ=>{
      this.data=dataServ;
      this.UpdateNbMembreParComite();// update the number of members per comite when the data is received
    });

    this.subscription= this.ComiteFilterServ.getComiteSelected().subscribe(comiteSelected=>this.comiteSelected=comiteSelected);// ensures that the component is notified when the selected comite changes
    //N.B this.subscription is a Subscription objec which we need to be able to unsubscribe later when the object is destroyed and avoid memory leaks (ngOnDestroy is lifecycle hook).
    
  }

  get filteredComiteMembres(): Array<Membre> { //methode qui permet de filtrer les membres par comite et l'affecter a filteredComiteMembres pour l'affichage
    return this.data.filter(membre => membre.comite === this.comiteSelected);
  }

   trackById(index: number, membre: Membre): number { //A methode that improves performance by tracking the id of each member and reusing existing elements instead of recreating them.
    return membre.id;
  } 

  UpdateNbMembreParComite():void{
    this.nbMemParComite=[0,0,0]; // 0 MEDIA , 0 SPONSORING , 0 LOGISTIQUE
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

}