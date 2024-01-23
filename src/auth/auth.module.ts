import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { SharedModule } from './shared/shared.module';

const ROUTES: Routes = [
  {
    path: 'auth',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
      },
      {
        path: 'login',
        loadChildren: () =>
          import('./login/login.module').then((m) => m.LoginModule),
      },
      {
        path: 'register',
        loadChildren: () =>
          import('./register/register.module').then((m) => m.RegisterModule),
      },
    ],
  },
];

export const firebaseConfig = {
  apiKey: 'AIzaSyCXz7GrHLBs-xlsCrr185iG4v4UrNreq2Y',
  authDomain: 'fitness-app-e668a.firebaseapp.com',
  databaseURL: 'https://fitness-app-e668a.firebaseio.com',
  projectId: 'fitness-app-e668a',
  storageBucket: 'fitness-app-e668a.appspot.com',
  messagingSenderId: '1014564696462',
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireModule,
    SharedModule.forRoot(),
  ],
})
export class AuthModule {}
