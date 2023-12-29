import { Component, Input } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'donut-card',
  template: `
    <div
      class="donut-card"
      [style.border]="donut.promo ? '2px solid #eee' : 'none'"
      [ngStyle]="{
        background: donut.promo ? 'red' : 'green',
        'font-size.px': 20
      }"
    >
      <img
        src="/assets/img/{{ donut.icon }}.svg"
        [alt]="donut.name"
        class="donut-card-icon"
      />
      <div>
        <p class="donut-card-name">
          {{ donut.name }}
          <ng-container [ngSwitch]="donut.promo" ]>
            <span
              *ngSwitchCase="'new'"
              class="donut-card-label"
              style="color: red; border-color: red;"
              >New</span
            >
            <span *ngSwitchCase="'limited'" class="donut-card-label"
              >Limited</span
            >
            <span *ngSwitchDefault class="donut-card-label"></span>
          </ng-container>
        </p>
        <p class="donut-card-price">
          {{ donut.price | currency : 'usd' : 'symbol' }}
        </p>
      </div>
    </div>
  `,
})
export class DonutCardComponent {
  @Input() donut!: Donut;
}
