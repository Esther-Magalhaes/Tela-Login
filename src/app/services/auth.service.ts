import { Injectable } from '@angular/core';

export interface User {
  id: number;
  email: string;
  password: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Mini banco de dados
  private USERS_DB: User[] = [
    { id: 1, email: 'gabriel@gmail.com', password: '1234', name: 'Gabriel Silva' },
    { id: 2, email: 'esther@gmail.com', password: '2003', name: 'Esther Magalhaes' }
  ];

private usuarioLogado: any = null; 

  login(emailInformado: string, senhaInformada: string): boolean {
    if (!emailInformado || !senhaInformada) return false;
    const user = this.USERS_DB.find(u => 
      u.email.toLowerCase() === emailInformado.toLowerCase().trim() && 
      u.password === senhaInformada.toString().trim()
    );

    if (user) {
      this.usuarioLogado = user; 
      return true;
    }
    return false;
  }

  getUsuarioLogado() {
    return this.usuarioLogado;
  }
}
