import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { catchError, Observable, throwError } from 'rxjs';
import { Projet } from './projet';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  apiUrl: string ="http://192.168.252.201:8000/api";

 
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  list(): Observable<any> {
    return this.httpClient.get(this.apiUrl +'/list-projectIndex/').pipe(
      catchError(this.handleError)
    );
  }

  create(projet: Projet): Observable<Object> {
    return this.httpClient.post(this.apiUrl +'/create-projectStore/', projet); 

  }

  update(id: any, data: any): Observable<any> {
    return this.httpClient.put(this.apiUrl + '/projectUpdate/' + id, data).pipe(
      catchError(this.handleError)
    );
  }


  getProjetById(id: number): Observable<Projet>{
    return this.httpClient.get<Projet>(this.apiUrl + '/list-projectShow/' + id );
  }

  delete(id: any): Observable<any> {
    return this.httpClient.delete(this.apiUrl +'/delete-projectDelete/'+ id).pipe(
      catchError(this.handleError)
    );
  }

  
  


  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };
}
