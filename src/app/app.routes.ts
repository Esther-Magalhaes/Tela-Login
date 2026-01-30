import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LoginC1Component } from './pages/login-c1/login-c1.component';
import { PaginaInicialComponent } from './pages/pagina-inicial/pagina-inicial.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login1', component: LoginC1Component },
  { path: 'pagina-inicial', component: PaginaInicialComponent }
];
