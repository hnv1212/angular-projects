import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonutListComponent } from './admin/containers/donut-list/donut-list.component';
import { DonutSingleComponent } from './admin/containers/donut-single/donut-single.component';

const routes: Routes = [
  {
    path: 'admin',
    children: [
      {
        path: 'donuts',
        component: DonutListComponent,
      },
      {
        path: 'donut',
        component: DonutSingleComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'donuts',
      },
    ],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'admin',
  },
  {
    path: '**',
    redirectTo: 'admin',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
