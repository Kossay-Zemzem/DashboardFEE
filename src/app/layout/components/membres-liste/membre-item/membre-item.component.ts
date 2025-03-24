import { Component } from '@angular/core';

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
  status:boolean=true;
}
