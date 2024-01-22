import { Component } from '@angular/core';
import { Store } from 'src/app/store';

@Component({
  selector: 'app-songs-playlist',
  template: ` <div class="songs">Playlist</div> `,
  styles: [],
})
export class SongsPlaylistComponent {
  constructor(private store: Store) {}
}
