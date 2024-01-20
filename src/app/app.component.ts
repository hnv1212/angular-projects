import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
// import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <header>
        <img src="/img/logo.svg" alt="" />
      </header>
      <div class="app__content">
        <nav>
          <a routerLink="folder/inbox" routerLinkActive="active">Inbox</a>
          <a routerLink="folder/trash" routerLinkActive="active">Trash</a>
        </nav>
        <mail-app></mail-app>
      </div>
    </div>
  `,
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      // .filter((event) => event instanceof NavigationEnd)
      .subscribe((event) => {
        // console.log(event);
        if(event instanceof NavigationEnd) {
          // console.log("🚀 ~ AppComponent ~ this.router.events.subscribe ~ event:", event)
        }
      });
  }
}
