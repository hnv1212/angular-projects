import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'donut-list',
  templateUrl: './donut-list.component.html',
  styles: [
    `
      .donut-card {
        display: flex;
        align-items: center;
        background: #f7f7f7;
        border-radius: 5px;
        margin-bottom: 5px;
        padding: 5px 15px;
        transition: transform 0.2s ease-in-out;
        &:hover {
          transform: translateY(-3px);
        }
        &-promo {
          border: 2px solid #eee;
        }
        &-name {
          font-size: 16px;
        }
        &-label {
          border: 1px solid #c14583;
          border-radius: 4px;
          padding: 0 4px;
          margin-left: 5px;
          font-size: 12px;
          color: #c14583;
        }
        &-price {
          font-size: 14px;
          color: #c14583;
        }
        &-icon {
          width: 50px;
          margin-right: 10px;
        }
      }
    `,
  ],
})
export class DonutListComponent implements OnInit {
  donuts!: Donut[];

  ngOnInit(): void {
    this.donuts = [
      {
        id: 'y8z0As',
        name: 'Just Chocolate',
        icon: 'just-chocolate',
        price: 119,
        promo: 'limited',
        description: 'For the pure chocoholic.',
      },
      {
        id: '3u98Kl',
        name: 'Glazed Fudge',
        icon: 'glazed-fudge',
        price: 129,
        promo: 'new',
        description: 'Sticky perfection.',
      },
      {
        id: 'ae098s',
        name: 'Caramel Swirl',
        icon: 'caramel-swirl',
        price: 129,
        description: 'Chocolate drizzled with caramel.',
      },
      {
        id: '8amkZ9',
        name: 'Sour Supreme',
        icon: 'sour-supreme',
        price: 139,
        description: 'For the sour advocate.',
      },
      {
        id: 'l3M0nz',
        name: 'Zesty Lemon',
        icon: 'zesty-lemon',
        price: 129,
        description: 'Delicious lucious lemon.',
      },
    ];
  }

  trackById(index: number, value: Donut) {
    console.log(index, value);
    return value.id;
  }
}
