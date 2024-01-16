import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'stock-products',
  template: ` <div class="stock-product" [formGroup]="parent"></div> `,
  styleUrls: ['./stock-products.component.scss'],
})
export class StockProductsComponent {
  @Input() parent!: FormGroup;
}
