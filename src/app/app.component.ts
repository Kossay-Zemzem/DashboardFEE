import { Component } from '@angular/core';
import { Router } from '@angular/router';
Router
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ForumFront';

  constructor(private router: Router) {}
    // Check if the current route is one that requires the sidebar and header
    showLayout(): boolean {
      const excludedRoutes = ['/auth', '/inscription']; //page routes that don't use header and sidebar
      return !excludedRoutes.includes(this.router.url);
    }
  }

