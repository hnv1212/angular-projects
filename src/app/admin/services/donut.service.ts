import { Injectable } from '@angular/core';
import { Donut } from '../models/donut.model';

@Injectable({
  providedIn: 'root',
})
export class DonutService {
  donuts: Donut[] = [];

  constructor() {}

  read() {
    return this.donuts;
  }

  readOne(id: string) {
    const donut = this.read().find((d: Donut) => d.id === id);

    if (donut) return donut;

    return { name: '', icon: '', price: 0, description: '' };
  }

  create(payload: Donut) {
    this.donuts = [...this.donuts, payload];
  }

  update(payload: Donut) {
    this.donuts = this.donuts.map((d: Donut) => {
      if (d.id === payload.id) {
        return payload;
      }
      return d;
    });
  }

  delete(payload: Donut) {
    this.donuts = this.donuts.filter((d: Donut) => d.id !== payload.id);
  }
}
