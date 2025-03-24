import { Component,OnInit } from '@angular/core';
import { MembreService } from 'src/app/services/membre.service';
import { Membre } from 'src/app/models/Membre';
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
    
  constructor(private MemberServ:MembreService) {}
    ngOnInit():void{
    this.MemberServ.getMembres().subscribe(dataServ=>{this.data=dataServ});
  }

  }
