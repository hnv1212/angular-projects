import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Store } from 'src/app/store';

export interface Song {
  id: number;
  artist: string;
  track: string;
  listened: boolean;
  favourite: boolean;
}

@Injectable()
export class SongsService {
  constructor(private http: HttpClient, private store: Store) {}

  getPlaylist$ = this.http
    .get<Observable<Song[]>>('http://localhost:3000/playlist')
    .pipe(tap((next) => this.store.set('playlist', next)));
}
