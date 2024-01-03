import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonutListComponent } from './containers/donut-list/donut-list.component';
import { DonutCardComponent } from './components/donut-card/donut-card.component';
import { DonutSingleComponent } from './containers/donut-single/donut-single.component';
import { DonutFormComponent } from './components/donut-form/donut-form.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'donuts',
    component: DonutListComponent,
  },
  {
    path: 'donuts/new',
    component: DonutSingleComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'donuts',
  },
];

@NgModule({
  declarations: [
    DonutListComponent,
    DonutCardComponent,
    DonutSingleComponent,
    DonutFormComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
})
export class AdminModule {}
