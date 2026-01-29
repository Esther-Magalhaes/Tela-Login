import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LoginC1Component } from './pages/login-c1/login-c1.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login1', component: LoginC1Component }
];
