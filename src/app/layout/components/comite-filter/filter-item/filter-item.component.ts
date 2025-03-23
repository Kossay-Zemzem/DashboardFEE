import { Component,Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-item',
  templateUrl: './filter-item.component.html',
  styleUrls: ['./filter-item.component.css']
})
export class FilterItemComponent {
  @Input() name:string='unknown';
  @Input() value:number=0;
  @Input() isSelected:boolean=false;
  @Output() buttonClicked = new EventEmitter();
  constructor() { }
  
  onButtonClick():void{
    this.buttonClicked.emit();
  }
}
