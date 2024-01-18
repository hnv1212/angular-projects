import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Item, Product } from '../../models/product.interface';
import { StockInventoryService } from '../../services/stock-inventory.service';
import { Observable } from 'rxjs';
import { StockValidators } from './stock-inventory.validators';

@Component({
  selector: 'stock-inventory',
  template: `
    <div class="stock-inventory">
      <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <stock-branch [parent]="form"></stock-branch>

        <stock-selector
          [parent]="form"
          [products]="products"
          (added)="addStock($event)"
        ></stock-selector>

        <stock-products
          [parent]="form"
          (removed)="removeStock($event)"
          [map]="productMap"
        ></stock-products>

        <div class="stock-inventory__price">
          Total: {{ total | currency : 'USD' : true }}
        </div>

        <div class="stock-inventory__buttons">
          <button type="submit" [disabled]="form.invalid">Order stock</button>
        </div>

        <pre>{{ form.value | json }}</pre>
      </form>
    </div>
  `,
  styleUrls: ['./stock-inventory.component.scss'],
})
export class StockInventoryComponent implements OnInit {
  products!: Product[];
  productMap: Map<number, Product>;
  total: number;

  form = this.fb.group(
    {
      store: this.fb.group({
        branch: [
          this.fb.control(''),
          Validators.required,
          StockValidators.checkBranch,
        ],
        code: ['', Validators.required],
      }),
      selector: this.createStock({}),
      stock: this.fb.array([]),
    },
    { validator: StockValidators.checkStockExists }
  );

  constructor(
    private fb: FormBuilder,
    private stockService: StockInventoryService
  ) {}

  ngOnInit(): void {
    const cart = this.stockService.getCartItems();
    const products = this.stockService.getProducts();

    Observable.forkJoin(cart, products).subscribe(
      ([cart, products]: [Item[], Product[]]) => {
        const myMap = products.map<[number, Product]>((product) => [
          product.id,
          product,
        ]);
        this.productMap = new Map<number, Product>(myMap);
        this.products = products;
        cart.forEach((item) => this.addStock(item));

        this.calculateTotal(this.form.get('stock')?.value);
        this.form
          .get('stock')
          ?.valueChanges.subscribe((value) => this.calculateTotal(value));
      }
    );
  }

  calculateTotal(value: Item[]) {
    const total = value.reduce((prev, next) => {
      return prev + next.quantity * this.productMap.get(next.product_id)?.price;
    }, 0);
    this.total = total;
  }

  createStock(stock) {
    return this.fb.group({
      product_id: parseInt(stock.product_id, 10) || '',
      quantity: stock.quantity || 10,
    });
  }

  addStock(stock) {
    const control = this.form.get('stock') as FormArray;
    control.push(this.createStock(stock));
  }

  removeStock({ group, index }: { group: FormGroup; index: number }) {
    console.log(
      '🚀 ~ StockInventoryComponent ~ removeStock ~ { group, index }:',
      { group, index }
    );
    const control = this.form.get('stock') as FormArray;
    control.removeAt(index);
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
