import { Component } from '@angular/core';
import { Store } from 'src/app/store';

@Component({
  selector: 'app-songs-listened',
  template: `
    <div class="songs">
      Listened
    </div>
  `,
  styles: [
  ]
})
export class SongsListenedComponent {
  constructor(
    private store: Store
  ) {}
}
