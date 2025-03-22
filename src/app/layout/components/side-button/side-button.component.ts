import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-side-button',
  templateUrl: './side-button.component.html',
  styleUrls: ['./side-button.component.css']
})
export class SideButtonComponent {
  @Input() content = "unknown";
  @Input() iconName = "";
  @Input() link="" ;
  textColorTcss:string="text-gray-700";
  ngOnInit(): void { 
    if(this.content=="Log out"){
      this.textColorTcss="text-red-500"; //change the color of the text to red for any button called "Log out"
    }
    }

  constructor() {

  }
}
