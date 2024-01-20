import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product, Item } from '../models/product.interface';
import { Observable, catchError, map } from 'rxjs';

@Injectable()
export class StockInventoryService {
  constructor(private http: HttpClient) {}

  getCartItems(): Observable<Item[]> {
    return this.http.get<Item[]>('/api/cart');
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/products');
  }
}
