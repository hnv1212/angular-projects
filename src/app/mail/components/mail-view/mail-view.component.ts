import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, pluck } from 'rxjs';
import { Mail } from '../../models/mail.interface';

@Component({
  selector: 'mail-view',
  template: `
    <div class="mail-view">
      <h2>{{ (message | async)?.from }}</h2>
      <p>{{ (message | async)?.summary }}</p>
    </div>
    <div class="mail-reply">
      <textarea
        (change)="updateReply($event)"
        placeholder="Type your reply..."
        [value]="reply"
      ></textarea>
      <button type="button" (click)="sendReply()">Send</button>
    </div>
  `,
  styleUrls: ['./mail-view.component.scss'],
})
export class MailViewComponent implements OnInit {
  message: Observable<Mail> = this.route.data.pipe(pluck('message'));
  reply = '';
  hasUnsaveChanges = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(() => {
      this.reply = '';
      this.hasUnsaveChanges = false;
    });
  }

  updateReply(event: Event) {
    const target = event.target as HTMLTextAreaElement;
    this.reply = target.value;
    this.hasUnsaveChanges = true;
  }

  sendReply() {
    console.log('Sent!', this.reply);
    this.reply = '';
    this.hasUnsaveChanges = false;
  }
  j;
}
