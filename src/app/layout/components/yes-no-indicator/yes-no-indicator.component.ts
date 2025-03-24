import { Component ,Input,SimpleChanges } from '@angular/core';
import { Factory } from 'lucide-angular';

@Component({
  selector: 'app-yes-no-indicator',
  templateUrl: './yes-no-indicator.component.html',
  styleUrls: ['./yes-no-indicator.component.css']
})
export class YesNoIndicatorComponent {
  @Input() content:string=""; //variable qui contient le texte a afficher
  @Input() isYes:boolean=true; //variable qui determine style (couleur) de l'element yay or nay
  styleTcss:string=""; //variable qui contient le style de l'element yay or nay
  constructor() {}
  ngOnInit():void{
    this.styleTcss = this.isYes ? "bg-green-500 border-green-200" : "bg-red-500 border-red-200"; //si isYes est true alors bg-green sinon bg-red
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isYes'] && changes['isYes'].currentValue) {
      this.isYes = changes['isYes'].currentValue;
      this.styleTcss = this.isYes ? "bg-green-500 border-1" : "bg-red-500";
    }
  }
}
