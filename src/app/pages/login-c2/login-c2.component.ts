import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; // Importe o ReactiveFormsModule

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login-c2',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, // Adicione aqui
    MatInputModule,
    MatCardModule
  ],
  templateUrl: './login-c2.component.html',
  styleUrl: './login-c2.component.scss'
})
export class LoginC2Component {
  email = '';
  password = '';

  constructor(private authService: AuthService) {}

  login() {
    const success = this.authService.login(this.email, this.password);
    if (success) {
      alert('sucesso');
    } else {
      alert('Usuário ou senha incorretos!');
    }
  }
}
