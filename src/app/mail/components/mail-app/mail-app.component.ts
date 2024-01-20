import { Component } from '@angular/core';

@Component({
  selector: 'mail-app',
  template: `
    <div class="mail">
      <router-outlet
        (activate)="onActivate($event)"
        (deactivate)="onDeactivate($event)"
      ></router-outlet>
    </div>
  `,
  styleUrls: ['./mail-app.component.scss'],
})
export class MailAppComponent {
  
  onDeactivate($event: any) {
    console.log('🚀 ~ MailAppComponent ~ onDeactivate ~ $event:', $event);
  }

  onActivate($event: any) {
    console.log('🚀 ~ MailAppComponent ~ onActivate ~ $event:', $event);
  }
}
