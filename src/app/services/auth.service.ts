import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // O seu mini banco de dados manual
  private USERS_DB = [
    { id: 1, email: 'gabriel@gmail.com', password: '1234', name: "Gabriel Silva" },
    { id: 2, email: 'esther@gmail.com', password: '2003', name: "Esther Magalhaes" } 
  ];

  login(emailInformado: string, senhaInformada: string): boolean {
    if (!emailInformado || !senhaInformada) return false;
    const user = this.USERS_DB.find(u => 
      u.email.toLowerCase() === emailInformado.toLowerCase().trim() && 
      u.password === senhaInformada.toString().trim()
    );

    return !!user; 
  }
}