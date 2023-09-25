import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  displayTitle: boolean = false;
  
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.onRouteChange(event);
      }
    });
  }

  // On route change event display title if route is not home
  onRouteChange(event: NavigationEnd) {
    this.displayTitle = event.url !== '/home';
  }
}
