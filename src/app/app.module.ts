import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './containers/app/app.component';
import { Store } from 'store';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from 'src/auth/auth.module';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppNavComponent } from './components/app-nav/app-nav.component';

// routes
export const ROUTES: Routes = [];

@NgModule({
  declarations: [AppComponent, AppHeaderComponent, AppNavComponent],
  imports: [BrowserModule, RouterModule.forRoot(ROUTES), AuthModule],
  providers: [Store],
  bootstrap: [AppComponent],
})
export class AppModule {}
