import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //Entete du haut pour l'autorisation

  public AUTH_API = '/login';
  constructor(private http: HttpClient) {}
  addlogin(phone: string, password: string): Observable<any> {
    return this.http.post(
      environment.baseUrl + `${this.AUTH_API}`,
      {
        phone,
        password,
      },
      httpOptions
    );
  }

  // addlogin(phone: string, password: string): Observable<any> {
  //   return this.http.post(
  //     environment.baseUrl + `${this.AUTH_API}`,
  //     {
  //       phone,
  //       password,
  //     },
  //     this.httpOptions
  //   );
  // }
}
