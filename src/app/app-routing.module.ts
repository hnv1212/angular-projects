import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestErrorComponent } from './core/test-error/test-error.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { ServerErrorComponent } from './core/server-error/server-error.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { breadcrumb: 'home'}
  },
  {
    path: 'test-error',
    component: TestErrorComponent,
    data: { breadcrumb: 'test errors'}
  },
  { path: 'not-found', component: NotFoundComponent, data: { breadcrumb: 'notfound errors'} },
  { path: 'server-error', component: ServerErrorComponent, data: { breadcrumb: 'server errors'} },
  {
    path: 'shop',
    loadChildren: () => import('./shop/shop.module').then((m) => m.ShopModule),
    data: { breadcrumb: 'shop'}
  },
  {
    path: 'basket',
    loadChildren: () => import('./basket/basket.module').then((m) => m.BasketModule),
    data: { breadcrumb: 'basket'}
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
