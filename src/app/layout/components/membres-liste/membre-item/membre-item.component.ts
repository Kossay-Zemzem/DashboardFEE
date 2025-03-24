import { Component,Input,SimpleChanges } from '@angular/core';
import { Membre } from 'src/app/models/Membre';

@Component({
  selector: 'app-membre-item',
  templateUrl: './membre-item.component.html',
  styleUrls: ['./membre-item.component.css']
})
export class MembreItemComponent {
   imgSrc:string="";
   nom:string="unknown";
   prenom:string="unknown";
   numero:string="unknown";
   email:string="unknown";
   isLibre:boolean=true;
   comite:string="unknown";
    @Input() dataMembre:Membre={
      id:0,
      imgSrc:"",
      nom:"unknown",
      prenom:"unknown",
      numero:"unknown",
      email:"unknown",
      isLibre:true,
      comite:"unknown"};

    textStyleTcss:string="font-poppins font-normal text-md";
  constructor() {}
  ngOnInit():void{}
  ngOnChanges(changes: SimpleChanges): void { //methode qui permet de detecter les changements des donnees des membres
    if (changes['dataMembre'] && changes['dataMembre'].currentValue) {
      const membre = changes['dataMembre'].currentValue;
      this.imgSrc = membre.imgSrc;
      this.nom = membre.nom;
      this.prenom = membre.prenom;
      this.numero = membre.numero;
      this.email = membre.email;
      this.isLibre = membre.isLibre;
      this.comite = membre.comite;
    }
  }
}
