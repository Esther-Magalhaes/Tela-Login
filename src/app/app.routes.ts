import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LoginC1Component } from './pages/login-c1/login-c1.component';
import { LoginC2Component } from './pages/login-c2/login-c2.component';
import { PaginaInicialComponent } from './pages/pagina-inicial/pagina-inicial.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login1', component: LoginC1Component },
  { path: 'login2', component: LoginC2Component },
{ path: 'pagina-inicial', component: PaginaInicialComponent }             
];
