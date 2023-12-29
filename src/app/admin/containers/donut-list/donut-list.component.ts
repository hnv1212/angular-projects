import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'donut-list',
  templateUrl: './donut-list.component.html',
  styleUrls: ['./donut-list.component.css'],
})
export class DonutListComponent implements OnInit {
  donuts!: Donut[];

  ngOnInit(): void {
    this.donuts = [
      {
        id: '123456',
        name: 'donut 1',
        icon: '',
        price: 119,
        description: 'djflkfd kdjflkdsj',
      },
      {
        id: 'a1bsu2',
        name: 'donut 2',
        icon: '',
        price: 123,
        promo: 'limited',
        description: 'djflkfd',
      },
    ];
  }

  trackById(index: number, value: Donut) {
    console.log(index, value);
    return value.id;
  }
}
