import { Component } from '@angular/core';

@Component({
  selector: 'app-membres-liste',
  templateUrl: './membres-liste.component.html',
  styleUrls: ['./membres-liste.component.css']
})
export class MembresListeComponent {
  headerItems:Array<string> = ["Nom","Numero","Email" ,"Status" ,"Actions"];

}
