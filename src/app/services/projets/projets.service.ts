import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Projet } from 'src/app/models/projets';

@Injectable({
  providedIn: 'root'
})
export class ProjetsService {

  latsPojects = '/totalProjet'

  constructor(private http: HttpClient) { }
  getFiveLatsProjets(IdCommune: number): Observable<Projet[]>{
      return this.http.get<Projet[]>(
        environment.baseUrl + `${this.latsPojects}/${IdCommune}`
      );
    }
}
