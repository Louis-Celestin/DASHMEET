import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PropositionIdee } from 'src/app/models/idee';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class IdeeService {
  private Idee_Url = '/list-ideeIndex';
  private Idee_delete = '/ideeDestroy';
  private Idee_show = '/list-ideeShow';
  constructor(private http: HttpClient) {}

  //Liste de tous les idées signalées

  getIdeeList(): Observable<any> {
    return this.http.get(environment.baseUrl + `${this.Idee_Url}`);
  }

  //API DE SUPPRESSION IDEA
  getIdeeDelete(id: number): Observable<Object> {
    return this.http.delete(environment.baseUrl + `${this.Idee_delete}/${id}`);
  }
  //Show idee users
  getIdeeById(id: number): Observable<PropositionIdee> {
    return this.http.get<PropositionIdee>(
      environment.baseUrl + `${this.Idee_show}/${id}`
    );
  }
}
