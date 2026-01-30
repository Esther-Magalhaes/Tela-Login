import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators } from '@angular/forms'; 

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    MatInputModule,
    MatCardModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  erro: string = '';

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  constructor(
  private authService: AuthService,
  private router: Router
) {}

login() {
    // 1. Verifica se o formulário está preenchido corretamente (validações do TS)
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      // 2. Chama o serviço e guarda o resultado (true ou false)
      const success = this.authService.login(email!, password!);

      // 3. Lógica do alerta
      if (success) {
        this.router.navigate(['/pagina-inicial']);
      } else {
        this.erro = 'E-mail ou senha incorretos!';
      }
    } else {
      // Caso o usuário tente clicar sem preencher nada
      alert('Por favor, preencha os campos do formulário');
    }
  }
}