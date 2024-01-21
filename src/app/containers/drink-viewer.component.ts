import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { Observable } from 'rxjs';

interface Drink {
  name: string;
  price: number;
}

@Component({
  selector: 'drink-viewer',
  providers: [FoodService],
  template: `
    <div>
      <div *ngFor="let item of item$ | async">
        {{ item.name }} {{ item.price | currency : 'USD' : true }}
      </div>
    </div>
  `,
  styles: [],
})
export class DrinkViewerComponent implements OnInit {
  item$: Observable<Drink[]>;

  constructor(private foodService: FoodService) {}

  ngOnInit(): void {
    this.item$ = this.foodService.getFood();
  }
}
