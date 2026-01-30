import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import confetti from 'canvas-confetti';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-pagina-inicial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagina-inicial.component.html',
  styleUrl: './pagina-inicial.component.scss'
})
export class PaginaInicialComponent implements OnInit {

  nomeUsuario = '';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    const usuario = this.authService.getUsuarioLogado();
    if (usuario) {
      this.nomeUsuario = usuario.name;
    }

    this.lancarConfete();
  }

  lancarConfete() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '9999';

    document.body.appendChild(canvas);

    const myConfetti = confetti.create(canvas, {
      resize: true,
      useWorker: true
    });

    myConfetti({
      particleCount: 600,
      spread: 3000,
      startVelocity: 30,
      scalar: 1,
      ticks: 120,
      origin: { x: 0.5, y: 0.4 }
    }).then(() => {
      document.body.removeChild(canvas);
    });
  }
}
