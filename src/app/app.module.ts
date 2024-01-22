import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Store } from './store';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [Store],
  bootstrap: [AppComponent],
})
export class AppModule {}
