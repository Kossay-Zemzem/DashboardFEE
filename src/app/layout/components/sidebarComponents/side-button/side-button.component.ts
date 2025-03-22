import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-side-button',
  templateUrl: './side-button.component.html',
  styleUrls: ['./side-button.component.css']
})
export class SideButtonComponent {
  @Input() content = "unknown";
  @Input() iconName = "";
}
