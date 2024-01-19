import { Component } from '@angular/core';

@Component({
  selector: 'mail-app',
  template: `
    <div class="mail">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./mail-app.component.scss'],
})
export class MailAppComponent {}
