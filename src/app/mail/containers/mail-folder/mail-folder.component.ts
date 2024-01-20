import { Component } from '@angular/core';
import { Mail } from '../../models/mail.interface';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, pluck } from 'rxjs';

@Component({
  selector: 'mail-folder',
  template: `
    <h2>{{ title | async}}</h2>
    <mail-item
      *ngFor="let message of (messages | async)"
      [message]="message"
    ></mail-item>
  `,
  styleUrls: ['./mail-folder.component.scss'],
})
export class MailFolderComponent {
  messages: Observable<Mail[]> = this.route.data.pipe(
    pluck('messages')
  )
  title: Observable<string> = this.route.params.pipe(pluck('name'))

  constructor(private route: ActivatedRoute) {}
}