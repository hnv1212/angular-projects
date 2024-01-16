import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'stock-branch',
  template: `
    <div [formGroup]="parent">
      <div formGroupName="store">
        <input type="text" placeholder="Branch ID" formControlName="branch" />
        <input type="text" placeholder="Manager Code" formControlName="code" />
      </div>
    </div>
  `,
  styleUrls: ['./stock-branch.component.scss'],
})
export class StockBranchComponent {
  @Input() parent!: FormGroup;
}
