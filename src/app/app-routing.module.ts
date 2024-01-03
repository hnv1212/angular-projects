import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonutListComponent } from './admin/containers/donut-list/donut-list.component';
import { DonutSingleComponent } from './admin/containers/donut-single/donut-single.component';

const routes: Routes = [
  { path: '', component: DonutListComponent },
  {
    path: 'donut',
    component: DonutSingleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
