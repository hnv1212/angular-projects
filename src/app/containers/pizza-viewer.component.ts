import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface Pizza {
  name: string;
  price: number;
}

export function PizzaFactory(http) {
  return new FoodService(http, 'http://localhost:3000/pizzas')
}

@Component({
  selector: 'pizza-viewer',
  providers: [{ provide: FoodService, useFactory: PizzaFactory, deps: [HttpClient] }],
  template: `
    <div>
      <div *ngFor="let item of items$ | async">
        {{ item.name }} {{ item.price | currency : 'USD' : true }}
      </div>
    </div>
  `,
  styles: [],
})
export class PizzaViewerComponent implements OnInit {
  items$: Observable<Pizza[]>;

  constructor(private foodService: FoodService) {}

  ngOnInit() {
    this.items$ = this.foodService.getFood();
  }
}
