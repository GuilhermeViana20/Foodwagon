// auth.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated: boolean = true;

  // login(username: string, password: string): boolean {
  //   if (username === 'seu-usuario' && password === 'sua-senha') {
  //     this.isAuthenticated = true;
  //     return true;
  //   } else {
  //     this.isAuthenticated = false;
  //     return false;
  //   }
  // }

  login(): boolean {
    this.isAuthenticated = true;
    return true;
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }
}
