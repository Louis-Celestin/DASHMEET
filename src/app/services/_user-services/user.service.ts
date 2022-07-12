import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Admin } from 'src/app/models/admin-profil';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  admin_Url = '/userAdminIndex';
  agent_Url = '/userAgentIndex';

  // getPublicContent(): Observable<any> {
  //   return this.http.get(environment.baseUrl + 'all', { responseType: 'text' });
  // }

  // getUserBoard(): Observable<any> {
  //   return this.http.get(environment.baseUrl + 'user', { responseType: 'text' });
  // }
  // getAgentBoard(): Observable<any> {
  //   return this.http.get(environment.baseUrl + `${this.admin_Url}`, {
  //     responseType: 'text',
  //   });
  // }

  //PArtie admin

  getAdminBoard(): Observable<any> {
    return this.http.get(environment.baseUrl + `${this.admin_Url}`, {
      responseType: 'text',
    });
  }

  //Partie agent
  getUserBoard(id: number): Observable<any> {
    return this.http.get(environment.baseUrl + `${this.agent_Url}/${id}`, {
      responseType: 'text',
    });
  }

  // getAdminBoard(IdUser: number): Observable<Admin[]> {
  //   return this.http.get<Admin[]>(
  //     environment.baseUrl + `${this.admin_Url}/${IdUser}`
  //   );
  // }
  //
}
