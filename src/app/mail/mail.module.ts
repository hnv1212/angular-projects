import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MailFolderComponent } from './containers/mail-folder/mail-folder.component';
import { MailAppComponent } from './components/mail-app/mail-app.component';
import { MailItemComponent } from './components/mail-item/mail-item.component';
import { RouterModule, Routes } from '@angular/router';
import { MailService } from './mail.service';
import { MailFolderResolve } from './containers/mail-folder/mail-folder.resolve';
import { MailViewComponent } from './components/mail-view/mail-view.component';
import { MailViewResolve } from './components/mail-view/mail-view.resolve';
import { AuthModule } from '../auth/auth.module';
import { AuthGuard } from '../auth/auth.guard';
import { MailViewGuard } from './components/mail-view/mail-view.guard';

export const ROUTES: Routes = [
  {
    path: 'mail',
    component: MailAppComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'folder/:name',
        component: MailFolderComponent,
        resolve: { messages: MailFolderResolve },
      },
      {
        path: 'message/:id',
        component: MailViewComponent,
        outlet: 'pane',
        canDeactivate: [MailViewGuard],
        resolve: { message: MailViewResolve },
      },
    ],
  },
];

@NgModule({
  declarations: [
    MailFolderComponent,
    MailAppComponent,
    MailItemComponent,
    MailViewComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(ROUTES),
    AuthModule,
  ],
  providers: [MailService, MailFolderResolve, MailViewResolve, MailViewGuard],
  exports: [MailAppComponent],
})
export class MailModule {}
