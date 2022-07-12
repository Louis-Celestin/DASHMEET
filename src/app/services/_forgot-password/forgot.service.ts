import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ForgotService {
  private forgot_Url = '/forgot';
  constructor(private http: HttpClient) {}

  forgot(email: string) {
    return this.http.post(
      environment.baseUrl + `${this.forgot_Url}`,
      {
        email,
      },
      httpOptions
    );
  }

  // forgot(email: string): Observable<Object> {
  //   return this.http.post<Object>(
  //     environment.baseUrl + `${this.forgot_Url}`,
  //     {}
  //   );
  // }

  // //methode login creer
  // login(pPhone: string, pPassword: string) {
  //   //affectons nos variables
  //   const loginData = {
  //     phone: pPhone,
  //     password: pPassword,
  //   };
  //   //Testons l'api
  //   var task = this.http.post(environment.baseUrl + this.Login_Url, loginData);

  //   //conditions sur les donnes entrées
  //   task.subscribe({
  //     next: (response: any) => {
  //       if (response.status == 'true') {
  //         // this.profile = response.data.name;
  //         this.profile = response.data;
  //         localStorage.setItem('profile', JSON.stringify(response));
  //         console.log('navigate to profile');
  //         this.router.navigate(['dashboard']);
  //       }
  //     },
  //     //Sinon message d'erreur en
  //     error: () => {},
  //     complete: () => {},
  //   });
  //   return task;
  // }
}
