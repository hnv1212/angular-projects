import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from 'src/app/store';
import { Song, SongsService } from '../../services/songs.service';

@Component({
  selector: 'songs-playlist',
  template: `
    <div class="songs">
      <songs-list [list]="playlist$ | async">Playlist</songs-list>
    </div>
  `,
  styles: [],
})
export class SongsPlaylistComponent implements OnInit, OnDestroy {
  playlist$: Observable<Song[]>;
  subscription: Subscription;

  constructor(private store: Store, private songsService: SongsService) {}

  ngOnInit(): void {
    this.playlist$ = this.store.select('playlist');
    // console.log(
    //   '🚀 ~ SongsPlaylistComponent ~ ngOnInit ~ playlist$:',
    //   this.playlist$
    // );

    this.subscription = this.songsService.getPlaylist$.subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
