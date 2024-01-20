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

export const ROUTES: Routes = [
  {
    path: 'folder/:name',
    component: MailFolderComponent,
    resolve: { messages: MailFolderResolve },
  },
  {
    path: 'message/:id',
    component: MailViewComponent,
    outlet: 'pane'
  },
];

@NgModule({
  declarations: [
    MailFolderComponent,
    MailAppComponent,
    MailItemComponent,
    MailViewComponent,
  ],
  imports: [CommonModule, HttpClientModule, RouterModule.forChild(ROUTES)],
  providers: [MailService, MailFolderResolve],
  exports: [MailAppComponent],
})
export class MailModule {}
