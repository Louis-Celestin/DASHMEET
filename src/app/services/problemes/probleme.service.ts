import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Probleme } from 'src/app/models/probleme';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProblemeService {
list_probleme = '/list-problemeIndex'
probleme_show ='/list-problemeShow'
  constructor(private httpClient: HttpClient) {}

  getProblemes(): Observable<Probleme[]> {
    //this.baseURL = 'http://192.168.252.201:8000/api/list-problemeIndex';
    return this.httpClient.get<Probleme[]>(environment.baseUrl +`${this.list_probleme}`);
  }
  getProblemeById(id: number): Observable<Probleme> {
    // this.baseURL ="http://192.168.252.201:8000/api/list-problemeShow/{id}";
    return this.httpClient.get<Probleme>(
      environment.baseUrl + `${this.probleme_show}/${id}`
    );
  }
}
