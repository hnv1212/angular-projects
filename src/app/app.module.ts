import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MailModule } from './mail/mail.module';
import {
  PreloadAllModules,
  PreloadingStrategy,
  Route,
  RouterModule,
  Routes,
} from '@angular/router';
import { Observable, of } from 'rxjs';

export class CustomPreload implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    return route.data && route.data['preload'] ? fn() : of(null)
  }
}

export const ROUTES: Routes = [
  {
    path: 'dashboard',
    data: { preload: true },
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((x) => x.DashboardModule),
  },
  {
    path: '**',
    redirectTo: 'mail/folder/inbox',
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    // HttpModule,
    MailModule,
    RouterModule.forRoot(ROUTES, { preloadingStrategy: CustomPreload }),
  ],
  providers: [CustomPreload],
  bootstrap: [AppComponent],
})
export class AppModule {}
