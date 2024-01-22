import { Component } from '@angular/core';
import { Store } from 'src/app/store';

@Component({
  selector: 'app-songs-favourites',
  template: ` <div class="songs">Favourites</div> `,
  styles: [],
})
export class SongsFavouritesComponent {
  constructor(private store: Store) {}
}
