import { Component } from '@angular/core';

@Component({
  selector: 'app-memebres-liste',
  templateUrl: './memebres-liste.component.html',
  styleUrls: ['./memebres-liste.component.css']
})
export class MemebresListeComponent {
  headerItems:Array<string> = ["Nom","Numero","Email" ,"Status" ,"Actions"];

}
