import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface Drink {
  name: string;
  price: number;
}

// export function DrinkFactory(http) {
//   return new FoodService(http, 'http://localhost:3000/drinks')
// }

export abstract class DrinkService {
  getDrinks: () => Observable<Drink[]>;
}

@Component({
  selector: 'drink-viewer',
  providers: [
    // { provide: FoodService, useFactory: DrinkFactory, deps: [HttpClient] },
    FoodService,
    { provide: DrinkService, useExisting: FoodService },
  ],
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
    this.item$ = this.foodService.getDrinks();
  }
}
