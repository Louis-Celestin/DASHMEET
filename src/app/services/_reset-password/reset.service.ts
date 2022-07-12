import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ResetService {
  public reset_Url = '/reset';
  private forgot_Url = '/forgot';
  constructor(private http: HttpClient) {}

  reset(token: string, password: string, password_confirmation: string) {
    //Variable pour reinitialiser le mot de passe
    const data = {
      token: token,
      password: password,
      password_confirmation: password_confirmation,
    };
    return this.http.post(environment.baseUrl + `${this.reset_Url}`, data);
  }

  forgot(email: string) {
    return this.http.post(
      environment.baseUrl + `${this.forgot_Url}`,
      {
        email,
      },
      httpOptions
    );
  }
}
