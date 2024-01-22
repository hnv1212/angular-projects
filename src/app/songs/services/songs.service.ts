import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  tap } from 'rxjs';
import { Store } from 'src/app/store';

@Injectable()
export class SongsService {
  constructor(private http: HttpClient, private store: Store) {}

  getPlaylist$ = this.http.get('http://localhost:3000/playlist').pipe(
    tap(next => this.store.set('playlist', next))
  )
}
