import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'stock-inventory',
  template: `
    <div class="stock-inventory">
      <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <div formGroupName="store">
          <input type="text" placeholder="Branch ID" formControlName="branch" />
          <input
            type="text"
            placeholder="Manager Code"
            formControlName="code"
          />
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
export class StockInventoryComponent {
  form = new FormGroup({
    store: new FormGroup({
      branch: new FormControl(''),
      code: new FormControl(''),
    }),
  });

  onSubmit() {
    console.log(this.form.value);
  }
}
