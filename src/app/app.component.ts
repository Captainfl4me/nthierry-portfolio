import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  displayTitle: boolean = false;
  year: number = new Date().getFullYear();

  constructor(private router: Router) {}

  openLink(link: string) {
    window.open(link, '_blank', 'noopener');
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.onRouteChange(event);
      }
    });
  }

  // On route change event display title if route is not home
  onRouteChange(event: NavigationEnd) {
    this.displayTitle = event.urlAfterRedirects !== '/home';
  }
}
