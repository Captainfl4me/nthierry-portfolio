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
  theme: 'light' | 'dark' = 'light';

  constructor(private router: Router) {}

  openLink(link: string) {
    window.open(link, '_blank', 'noopener');
  }

  ngOnInit() {
    // index.html sets data-theme before first paint; read it back here
    this.theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.onRouteChange(event);
      }
    });
  }

  toggleTheme() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', this.theme);
    try {
      localStorage.setItem('theme', this.theme);
    } catch (e) { /* private mode etc. */ }
  }

  // On route change event display title if route is not home
  onRouteChange(event: NavigationEnd) {
    this.displayTitle = event.urlAfterRedirects !== '/home';
  }
}
