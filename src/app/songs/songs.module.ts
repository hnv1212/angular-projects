import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongsFavouritesComponent } from './components/songs-favourites/songs-favourites.component';
import { SongsListenedComponent } from './components/songs-listened/songs-listened.component';
import { SongsPlaylistComponent } from './components/songs-playlist/songs-playlist.component';



@NgModule({
  declarations: [
    SongsFavouritesComponent,
    SongsListenedComponent,
    SongsPlaylistComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SongsModule { }
