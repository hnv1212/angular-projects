import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/store';
import { Song, SongsService } from '../../services/songs.service';
import { Observable, Subscription, filter, map } from 'rxjs';

@Component({
  selector: 'songs-listened',
  template: `
    <div class="songs">
      <songs-list [list]="listened$ | async"> Played </songs-list>
    </div>
  `,
  styles: [],
})
export class SongsListenedComponent implements OnInit {
  listened$: Observable<Song[]>;

  constructor(private store: Store, private songsService: SongsService) {}

    ngOnInit() {
    this.listened$ = this.store.select<Song[]>('playlist').pipe(
      map((playlist) =>
          (playlist as Array<Song>).filter((track: Song) => track.listened)
        )
    );
  }
}
