import { Injectable } from '@angular/core';

//declarons nos constante attribution du token
const token_key = 'auth-token';
//declarons nos constante information user
const user_key = 'auth-user';

@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  constructor() {}

  //Efface la section d'utilisation
  signOut(): void {
    window.sessionStorage.clear();
  }

  //Sauvegarder les tokens user
  public saveToken(token: string): void {
    window.sessionStorage.removeItem(token_key);
    window.sessionStorage.setItem(token_key, JSON.stringify(token));
  }

  //Obtenir le token du user
  public getToken(): string | null {
    return window.sessionStorage.getItem(token_key);
  }

  //save user
  public saveUser(user: any): void {
    window.sessionStorage.removeItem(user_key);
    window.sessionStorage.setItem(user_key, JSON.stringify(user));
  }

  //Obtenir un user
  // public getUser(): any {
  //   return JSON.parse(sessionStorage.getItem(user_key));
  // }

  // public get(): any {
  //   return JSON.parse(sessionStorage.getItem(user_key)
  //   if(user){

  //   }

  //   );
  // }

  public getUser(): any {
    const user = window.sessionStorage.getItem(user_key);
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }
  // public getUser(): any {
  //   return JSON.parse(sessionStorage.getItem(user_key) || '{}');
  // }
}
