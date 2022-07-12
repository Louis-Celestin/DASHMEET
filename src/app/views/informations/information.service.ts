import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { catchError, Observable, throwError } from 'rxjs';
import { Communes } from 'src/app/models/communes';
import { Typeinformation } from './typeinformation';
import { Information } from './information';

@Injectable({
  providedIn: 'root',
})
export class InformationService {
  getInfosDelete() {
    throw new Error('Method not implemented.');
  }
  apiUrl: string = 'http://192.168.252.201:8000/api/informationIndex';
  baseURL = '';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {}

  // mes 3 fonctions ---Debut---

  list(): Observable<any> {
    return this.httpClient.get(this.apiUrl).pipe(catchError(this.handleError));
  }

  getCommunes(): Observable<Communes[]> {
    this.baseURL = 'http://192.168.252.201:8000/api/communeIndex';
    return this.httpClient.get<Communes[]>(`${this.baseURL}`);
  }

  getTypeInfos(): Observable<Typeinformation[]> {
    this.baseURL = 'http://192.168.252.201:8000/api/typeInformationIndex';
    return this.httpClient.get<Typeinformation[]>(`${this.baseURL}`);
  }

  // mes 3 fonctions ---Fin---

  // Create new item
  getItem(id: any): Observable<any> {
    return this.httpClient
      .get(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  create(information: Information): Observable<Object> {
    this.baseURL = 'http://192.168.252.201:8000/api/informationStore/1';
    return this.httpClient.post(`${this.baseURL}`, information);
  }
  // Edit/ Update
  update(id: any, data: any): Observable<any> {
    return this.httpClient
      .put(`${this.apiUrl}/${id}`, data)
      .pipe(catchError(this.handleError));
  }

  // Delete
  delete(id: any): Observable<any> {
    return this.httpClient
      .delete(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  // Search By Name
  filterByTitle(title: any): Observable<any> {
    return this.httpClient
      .get(`${this.apiUrl}?title_like=${title}`)
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
