import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Communes } from 'src/app/models/communes';
import { TypeInformations } from 'src/app/models/type-informations';
import { Informations } from 'src/app/models/information';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class InformationsService {
  //Url informations
  apiUrl = '/informationIndex';
  //url Communes
  baseUrl = '/communeIndex';
  //Url information
  infoUrl = '/typeInformationIndex';
  //create information url
  storeInfos = '/informationStore';
  //delete infos
  deleteInfos = '/informationdelete';
  //liste des informations
  listInfos = '/informationIndex';

  constructor(private http: HttpClient) {}

  // mes 3 fonctions ---Debut---

  createInformation(IdUser: number, infos: Informations) {
    return this.http.post(
      environment.baseUrl + `${this.storeInfos}/${IdUser}`,
      infos
    );
  }

  //Liste type Information
  getTypeInfosList(): Observable<TypeInformations[]> {
    return this.http.get<TypeInformations[]>(
      environment.baseUrl + `${this.infoUrl}`
    );
  }

  //READ STREET API Communes[] is a modele
  getStreetList(): Observable<Communes[]> {
    return this.http.get<Communes[]>(environment.baseUrl + `${this.baseUrl}`);
  }

  //delete Information
  // getDeleteInfos(id: number): Observable<Object> {
  //   return this.http.delete(environment.baseUrl + `${this.deleteInfos}/${id}`);
  // }

  InfosDelete(id: number): Observable<Object> {
    return this.http.delete(environment.baseUrl + `${this.deleteInfos}/${id}`);
  }

  getInfoslist(): Observable<any> {
    return this.http
      .get(environment.baseUrl + `${this.listInfos}`)
      .pipe(catchError(this.handleError));
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later.');
  }
}
