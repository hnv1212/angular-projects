import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Item, Product } from '../models/product.interface';

@Injectable()
export class StockInventoryService {
  constructor(private http: Http) {}

  getCartItems(): Observable<Item[]> {
    return this.http
      .get('/api/cart')
      .map((response: Response) => response.json())
      .catch((err: any) => Observable.throw(err.json()));
  }

  getProducts(): Observable<Product[]> {
    return this.http
      .get('/api/products')
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  checkBranchId(id: string): Observable<boolean> {
    let search = new URLSearchParams();
    search.set('id', id);
    return this.http
      .get('/api/branches', { search })
      .map((response: Response) => response.json())
      .map((response: any[]) => !!response.length)
      .catchError((error: any) => Observable.throw(error.json()));
  }
}
