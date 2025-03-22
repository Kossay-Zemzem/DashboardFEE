import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent {
  nom:string="MEKKI";
  prenom:string="Mohamed";
  email:string="Mohamed.Mekki@enicar.ucar.tn";
  constructor(){

  }
}
