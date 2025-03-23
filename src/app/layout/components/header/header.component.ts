import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title:string = 'Membres de comités';
  leftOffsetTcss:string="left-[14.7rem]" //offset of the yellow box decoration
  topOffsetTcss:string="top-[0.6rem]" //offset of the yellow box decoration
  yellowBoxWidthTcss:string="w-40" //width of the yellow box decoration

  ngOnInit() {
    console.log('HeaderComponent initialized');
  }
  constructor() {}
}
