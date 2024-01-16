import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'stock-selector',
  template: ` <div class="stock-selector" [formGroup]="parent"></div> `,
  styleUrls: ['./stock-selector.component.scss'],
})
export class StockSelectorComponent {
  @Input() parent!: FormGroup;
}
