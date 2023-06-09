import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'Authorities';

@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {

  signOut(): void {
    sessionStorage.clear();
  }

  setToken(token: string): void {
    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.setItem(TOKEN_KEY, token);
  }

  getToken(): string {
    const token = sessionStorage.getItem(TOKEN_KEY) ?? '';
    return token;
  }

  setUsername(username: string): void {
    sessionStorage.removeItem(USERNAME_KEY);
    sessionStorage.setItem(USERNAME_KEY, username);
  }

  getUsername(): string {
    const username = sessionStorage.getItem(USERNAME_KEY) ?? '';
    return username;
  }

  setAuthorities(authorities: string[]) {
    sessionStorage.removeItem(AUTHORITIES_KEY);
    sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }

  getAuthorities(): string[] {
    const roles: string[] = [];
    const authoritiesKeys = sessionStorage.getItem(AUTHORITIES_KEY);

    if (authoritiesKeys) {
      JSON.parse(authoritiesKeys).forEach((el: string) => {
        roles.push(el);
      });
    }

    return roles;
  }
}
