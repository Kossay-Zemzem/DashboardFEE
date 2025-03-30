import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input() title: string = 'Membres de comités';
  @Input() leftOffsetTcss: string = "left-[14.7rem]" //offset of the yellow box decoration
  @Input() topOffsetTcss: string = "top-[0.6rem]" //offset of the yellow box decoration
  @Input() yellowBoxWidthTcss: string = "w-40" //width of the yellow box decoration

  ngOnInit() {
    console.log('HeaderComponent initialized');
  }
  constructor() { }
}
