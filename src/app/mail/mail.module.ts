import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailFolderComponent } from './containers/mail-folder/mail-folder.component';
import { MailAppComponent } from './components/mail-app/mail-app.component';
import { MailItemComponent } from './components/mail-item/mail-item.component';
import { RouterModule, Routes } from '@angular/router';

export const ROUTES: Routes = [
  { path: 'folder/:name', component: MailFolderComponent },
];

@NgModule({
  declarations: [MailFolderComponent, MailAppComponent, MailItemComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  exports: [MailAppComponent]
})
export class MailModule {}
