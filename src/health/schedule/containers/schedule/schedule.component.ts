import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ScheduleService } from 'src/health/shared/services/schedule.service';
import { Store } from 'store';

@Component({
  selector: 'schedule',
  styleUrls: ['./schedule.component.scss'],
  template: `
    <div class="schedule">
      <schedule-calendar
        [date]="date$ | async"
        (change)="changeDate($event)"
      ></schedule-calendar>
    </div>
  `,
})
export class ScheduleComponent implements OnInit, OnDestroy {
  date$: Observable<Date>;
  subscription: Subscription[] = [];

  constructor(private store: Store, private scheduleService: ScheduleService) {}

  ngOnDestroy(): void {
    this.date$ = this.store.select('date');
    this.subscription = [this.scheduleService.schedule$.subscribe()];
  }

  changeDate(date: Date) {
    this.scheduleService.updateDate(date);
  }

  ngOnInit(): void {
    this.subscription.forEach((sub) => sub.unsubscribe());
  }
}
