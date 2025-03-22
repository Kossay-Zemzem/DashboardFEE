import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  SidebarItems = [
    { name: 'List Des Membres', icon: 'layout-dashboard', link: '/membres' },
    { name: 'Taches', icon: 'layout-list', link: '/taches' },
    { name: "Demandes d'inscription", icon: 'user-round-plus', link: '/demande' },
    { name: 'Log out', icon: 'log-out', link: '/' },
  ];
  constructor() { 

  }
}
