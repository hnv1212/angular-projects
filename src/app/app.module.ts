import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MailModule } from './mail/mail.module';
import { RouterModule, Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: 'dashboard',
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
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
