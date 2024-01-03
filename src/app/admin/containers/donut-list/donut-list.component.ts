import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';
import { DonutService } from '../../services/donut.service';

@Component({
  selector: 'donut-list',
  templateUrl: './donut-list.component.html',
  styles: [],
})
export class DonutListComponent implements OnInit {
  donuts!: Donut[];

  constructor(private donutService: DonutService) {}

  ngOnInit(): void {
    this.donuts = this.donutService.donuts;
  }

  trackById(index: number, value: Donut) {
    console.log(index, value);
    return value.id;
  }
}
