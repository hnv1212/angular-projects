import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, pluck } from 'rxjs';
import { Mail } from '../../models/mail.interface';

@Component({
  selector: 'mail-view',
  template: ` <div class="mail-view">
    <h2>{{ (message | async)?.from }}</h2>
    <p>{{ (message | async)?.summary }}</p>
  </div> `,
  styleUrls: ['./mail-view.component.css'],
})
export class MailViewComponent {
  message: Observable<Mail> = this.route.data.pipe(pluck('message'));

  constructor(private route: ActivatedRoute) {}
}
