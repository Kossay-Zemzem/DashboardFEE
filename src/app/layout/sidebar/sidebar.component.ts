import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  SidebarItems = [
    { name: 'List Des Membres', icon: 'dashboard', link: '/dashboard' },
    { name: 'Taches', icon: 'people', link: '/users' },
    { name: "Demandes d'inscription", icon: 'shopping_cart', link: '/products' },
    { name: 'Log out', icon: 'shopping_basket', link: '/orders' },
  ];
  constructor() { 
    console.log(this.SidebarItems[0].name)
  }
}
