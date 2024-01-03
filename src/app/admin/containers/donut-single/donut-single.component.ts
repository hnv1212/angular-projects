import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'donut-single',
  template: `
    <div>
      <donut-form [donut]="donut" (create)="onCreate($event)"></donut-form>
    </div>
  `,
  styles: [],
})
export class DonutSingleComponent implements OnInit {
  donut!: Donut;

  ngOnInit(): void {
    this.donut = {};
  }

  onCreate(donut: Donut) {}
}
