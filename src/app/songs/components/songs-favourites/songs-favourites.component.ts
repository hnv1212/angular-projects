import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/store';
import { Song, SongsService } from '../../services/songs.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'songs-favourites',
  template: `
    <div class="songs">
    <songs-list
        [list]="favourites$ | async">
        Favourites
      </songs-list>
    </div>
  `,
  styles: [],
})
export class SongsFavouritesComponent implements OnInit {
  favourites$: Observable<any[]>;

  constructor(private store: Store, private songsService: SongsService) {}

  ngOnInit(): void {
    this.favourites$ = this.store
      .select('playlist')
      .pipe(
        map((playlist) =>
          (playlist as Array<Song>).filter((track: Song) => track.favourite)
        )
      );
      // .filter(Boolean)
      // .map((playlist) => playlist.filter((track) => track.favourite));
  }
}
