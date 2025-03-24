import { Component } from '@angular/core';

@Component({
  selector: 'app-membres-liste',
  templateUrl: './membres-liste.component.html',
  styleUrls: ['./membres-liste.component.css']
})
export class MembresListeComponent {
  headerItems:Array<string> = ["Nom","Numero","Email" ,"Status" ,"Actions"];
  data:Array<any> = [
    {imgSrc:"",nom:"unknown",prenom:"unknown",numero:"unknown",email:"unknown",status:true}]
}
