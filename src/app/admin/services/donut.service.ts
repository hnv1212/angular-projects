import { Injectable } from '@angular/core';
import { Donut } from '../models/donut.model';
import { HttpClient } from '@angular/common/http';
import { map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DonutService {
  donuts: Donut[] = [];

  constructor(private http: HttpClient) {}

  read() {
    if (this.donuts.length) {
      return of(this.donuts);
    }

    return this.http.get<Donut[]>(`/api/donuts`).pipe(
      tap((donuts) => {
        this.donuts = donuts;
      })
    );
  }

  readOne(id: string) {
    return this.read().pipe(
      map((donuts) => {
        const donut = donuts.find((d: Donut) => d.id === id);

        if (donut) return donut;

        return { name: '', icon: '', price: 0, description: '' };
      })
    );
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
