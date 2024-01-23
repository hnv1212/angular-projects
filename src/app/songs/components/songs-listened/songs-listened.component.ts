import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/store';
import { SongsService } from '../../services/songs.service';
import { Observable, filter, map } from 'rxjs';

@Component({
  selector: 'songs-listened',
  template: `
    <div class="songs">
      <div *ngFor="let item of listened$ | async">
        {{ item.artist }}
        {{ item.track }}
      </div>
    </div>
  `,
  styles: [],
})
export class SongsListenedComponent implements OnInit {
  listened$: Observable<any[]>;

  constructor(private store: Store, private songsService: SongsService) {}

  ngOnInit(): void {
    this.listened$ = this.store
      .select('playlist')
      .filter(Boolean)
      .map((playlist) => playlist.filter((track) => track.listened));
  }
}
