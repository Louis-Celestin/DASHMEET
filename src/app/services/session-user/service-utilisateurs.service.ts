import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from 'src/app/models/utilisateurs-model';
import { Communes } from 'src/app/models/communes';
import { environment } from 'src/environments/environment';
import { TypeUtilisateur } from 'src/app/models/agents';
import { DataList } from 'src/app/models/dataList';
import { UserUpdate } from 'src/app/models/userUpdate';

@Injectable({
  providedIn: 'root',
})
export class ServiceUtilisateursService {
  //Url de login
  User_Url = '/usersCommunes';
  //url de suppression
  Delete_User = '/delete';
  //url de liste communes
  Street_URL = '/communeIndex';
  //url de liste arguments
  User_Type = '/typUserIndex';
  //url for register user
  Register_Url = '/register';
  //Modifier user
  UpdateUser = '/update';
  //Recuperer le user index
  UserShow = '/userShow';

  //déclarons notre http
  constructor(private http: HttpClient) {}

  //CREATE USERS API
  createUser(agent: User): Observable<Object> {
    return this.http.post(environment.baseUrl + `${this.Register_Url}`, agent);
  }

  //READ STREET API Communes[] is a modele
  getStreetList(): Observable<Communes[]> {
    return this.http.get<Communes[]>(
      environment.baseUrl + `${this.Street_URL}`
    );
  }

  //READ TYPE UTILISATEURS API TypeUtilisateur[] is a modele
  getTypeUserList(): Observable<TypeUtilisateur[]> {
    return this.http.get<TypeUtilisateur[]>(
      environment.baseUrl + `${this.User_Type}`
    );
  }

  //Liste de tout les users
  getUserList(id: number): Observable<DataList[]> {
    return this.http.get<DataList[]>(
      environment.baseUrl + `${this.User_Url}/${id}`
    );
  }

  //DELETE USERS
  deleteUser(id: number): Observable<Object> {
    return this.http.delete(environment.baseUrl + `${this.Delete_User}/${id}`);
  }

  getUserById(id: number): Observable<DataList> {
    return this.http.get<DataList>(
      environment.baseUrl + `${this.UserShow}/${id}`
    );
  }

  //Update user

  updateUser(id: number, list: DataList): Observable<Object> {
    return this.http.put(
      environment.baseUrl + `${this.UpdateUser}/${id}`,
      list
    );
  }
}
