import { Component, Input } from '@angular/core';
import { Mail } from '../../models/mail.interface';

@Component({
  selector: 'mail-item',
  template: `
    <a
      class="mail-item"
      [routerLink]="['', { outlets: { pane: ['message', message.id] } }]"
      routerLinkActive="active"
    >
      <h3>
        {{ message.from }}
        <span>{{ message.timestamp | date : 'shortTime' }}</span>
      </h3>
      <p>{{ message.summary }}</p>
    </a>
  `,
  styleUrls: ['./mail-item.component.scss'],
})
export class MailItemComponent {
  @Input() message!: Mail;
}
