import {  Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <label>
        Credit Card Number
        <input type="text" name="credit-card" placeholder="Enter your 16-digit card number" credit-card>

      </label>
    </div>
  `,
})
export class AppComponent {

}
