import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Login } from 'src/app/models/login';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  //Varibale de l'url:
  private Login_Url = '/login';

  //VAriable qui contient les infos du user
  profile: any = null;
  errorData!: {};
  constructor(private http: HttpClient, private router: Router) {}

  haveToken(): boolean {
    //comment
    var profile = localStorage.getItem('profile');
    console.log(profile);
    //notre profile peut être null
    this.profile = JSON.parse(profile!);

    return !(!this.profile || !this.profile.token);
  }

  //methode login creer
  login(pPhone: string, pPassword: string) {
    //affectons nos variables
    const loginData = {
      phone: pPhone,
      password: pPassword,
    };
    //Testons l'api
    var task = this.http.post(environment.baseUrl + this.Login_Url, loginData);

    //conditions sur les donnes entrées
    task.subscribe({
      next: (response: any) => {
        if (response.status == 'true') {
          // this.profile = response.data.name;
          this.profile = response.data;
          localStorage.setItem('profile', JSON.stringify(response));
          console.log('navigate to profile');
          this.router.navigate(['dashboard']);
        }
      },
      //Sinon message d'erreur en
      error: () => {},
      complete: () => {},
    });
    return task;
  }
}
