import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface Side {
  name: string;
  price: number;
}

export function SideFactory(http) {
  return new FoodService(http, 'http://localhost:3000/sides')
}

@Component({
  selector: 'side-viewer',
  providers: [{ provide: FoodService, useFactory: SideFactory, deps: [HttpClient] }],
  template: `
    <div>
      <div *ngFor="let item of items$ | async">
        {{ item.name }} {{ item.price | currency : 'USD' : true }}
      </div>
    </div>
  `,
  styles: [],
})
export class SideViewerComponent implements OnInit {
  items$: Observable<Side[]>;

  constructor(private foodService: FoodService) {}

  ngOnInit() {
    this.items$ = this.foodService.getFood();
  }
}
