import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { API_TOKEN } from './token';

@Injectable()
export class FoodService {
  constructor(
    private http: HttpClient,
    @Inject(API_TOKEN) private api: string
  ) {
    console.log('Ultimate Angular');
  }

  getFood(): Observable<any> {
    return this.http.get(this.api);
  }
}
