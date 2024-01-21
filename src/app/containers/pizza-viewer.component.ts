import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { Observable } from 'rxjs';

interface Pizza {
  name: string;
  price: number;
}

@Component({
  selector: 'pizza-viewer',
  providers: [FoodService],
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
