import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() SidebarItems = [
    { name: 'List Des Membres', icon: 'layout-dashboard', link: '/membres', activeState: true },
    { name: 'Taches', icon: 'layout-list', link: '/taches', activeState: false },
    { name: "Demandes d'inscription", icon: 'user-round-plus', link: '/demande', activeState: false },
    { name: 'Log out', icon: 'log-out', link: '/', activeState: false },
  ];
  constructor() { }

  onSideButtonClick(i: number) {
    this.SidebarItems.forEach((item, index) => {
      item.activeState = i == index
      /*       if(i==index){
              item.activeState = true;
            }else{
              item.activeState = false;
            } */

    });
  }
}
