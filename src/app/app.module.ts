import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DrinkViewerComponent } from './containers/drink-viewer.component';
import { PizzaViewerComponent } from './containers/pizza-viewer.component';
import { SideViewerComponent } from './containers/side-viewer.component';
import { API_TOKEN } from './token';

@NgModule({
  declarations: [
    AppComponent,
    DrinkViewerComponent,
    PizzaViewerComponent,
    SideViewerComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [
    // {
    //   provide: API_TOKEN,
    //   useValue: 'http://localhost:3000/pizzas',
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
