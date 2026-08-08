import { Routes } from '@angular/router';
import { LoginPage } from './features/auth/login/login-page';

export const routes: Routes = [
  {
    path: 'auth/login',
    component: LoginPage,
  },
];
