import { Component,Input, Output , EventEmitter,SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-side-button',
  templateUrl: './side-button.component.html',
  styleUrls: ['./side-button.component.css']
})
export class SideButtonComponent {
  @Input() content = "unknown";
  @Input() iconName = "";
  @Input() link="" ;

  @Input() activeState:boolean=false;
  @Output() buttonClicked = new EventEmitter();
  //styling variables
  textColorTcss:string="text-gray-700";
  buttonBgTcss:string="bg-transparent";
  buttonHoverBgTcss:string="hover:bg-[#D8E0F5]";


  constructor() {}
  ngOnInit(): void { 
    if(this.content=="Log out"){
      this.textColorTcss="text-red-500"; //change the color of the text to red for any button called "Log out"
      this.buttonHoverBgTcss="hover:bg-[#f5ddd8]";
    }
    this.updateActiveStyle();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['activeState']) {
      this.updateActiveStyle(); 
    }
  }

  onButtonClick():void{
    this.buttonClicked.emit();
  }

  updateActiveStyle(): void { //simplified version (same logic as below)
    const isLogOut:boolean = this.content === "Log out";
  
    if (this.activeState) {
      this.textColorTcss = isLogOut ? "text-red-500" : "text-blue-700";
      this.buttonBgTcss = isLogOut ?"bg-[#f5ddd8]" : "bg-[#D8E0F5]";
    } else {
      this.textColorTcss = isLogOut ? "text-red-500" : "text-gray-700";
      this.buttonBgTcss = "bg-transparent";
    }
  }

/*   updateActiveStyle():void{ //original version (same logic as above)
    if (this.content == "Log out") {
      if(this.activeState){
      this.textColorTcss = "text-red-500";
      this.buttonBgTcss="bg-[#D8E0F5]";
      }
      else
      {
        this.textColorTcss = "text-red-500";
        this.buttonBgTcss="bg-transparent";
      }
    }
    else
    {
      if(this.activeState){ //Set active button stlye (seletected button)
      this.textColorTcss="text-blue-700"; 
      this.buttonBgTcss="bg-[#D8E0F5]";
    }
    else
    { //Set inactive button stlye (not seletected button)
      this.textColorTcss="text-gray-700"; 
      this.buttonBgTcss="bg-transparent";
    }
  }
  } */
  

}
