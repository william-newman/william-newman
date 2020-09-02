import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'william-newman';
  navItems = ['Home', 'Projects', 'About'];

  constructor(private router: Router) { }

  navigateTo(destination: string): void {
    const url = destination.toLowerCase();

    this.router.navigateByUrl(url);
  }
}
