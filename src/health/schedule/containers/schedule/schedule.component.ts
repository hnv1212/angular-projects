import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Meal, MealsService } from 'src/health/shared/services/meals.service';
import {
  ScheduleItem,
  ScheduleService,
} from 'src/health/shared/services/schedule.service';
import {
  Workout,
  WorkoutsService,
} from 'src/health/shared/services/workouts.service';
import { Store } from 'store';

@Component({
  selector: 'schedule',
  styleUrls: ['./schedule.component.scss'],
  template: `
    <div class="schedule">
      <schedule-calendar
        [date]="date$ | async"
        [items]="schedule$ | async"
        (change)="changeDate($event)"
        (select)="changeSection($event)"
      ></schedule-calendar>

      <schedule-assign
        *ngIf="open"
        [section]="selected$ | async"
        [list]="list$ | async"
      ></schedule-assign>
    </div>
  `,
})
export class ScheduleComponent implements OnInit, OnDestroy {
  open = false;
  date$: Observable<Date>;
  schedule$: Observable<ScheduleItem>;
  selected$: Observable<any>;
  list$: Observable<Meal[] | Workout[]>;
  subscription: Subscription[] = [];

  constructor(
    private store: Store,
    private scheduleService: ScheduleService,
    private mealsService: MealsService,
    private workoutsService: WorkoutsService
  ) {}

  ngOnInit(): void {
    this.date$ = this.store.select('date');
    this.schedule$ = this.store.select('schedule');
    this.selected$ = this.store.select('selected');
    this.list$ = this.store.select('list');

    this.subscription = [
      this.scheduleService.schedule$.subscribe(),
      this.scheduleService.selected$.subscribe(),
      this.scheduleService.list$.subscribe(),
      this.mealsService.meals$.subscribe(),
      this.workoutsService.workouts$.subscribe(),
    ];
  }

  changeDate(date: Date) {
    this.scheduleService.updateDate(date);
  }

  changeSection(event: any) {
    console.log('🚀 ~ ScheduleComponent ~ changeSection ~ event:', event);
    this.scheduleService.selectSection(event);
    this.open = true;
  }

  ngOnDestroy(): void {
    this.subscription.forEach((sub) => sub.unsubscribe());
  }
}
