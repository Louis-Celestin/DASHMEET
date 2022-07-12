import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Agents } from 'src/app/models/agents-mairie';

@Injectable({
  providedIn: 'root',
})
export class AgentsService {
  public AgentUrl = '/userAgentIndex';
  constructor(private http: HttpClient, private router: Router) {}

  //Liste de tous les idées agents

  getAgentList(Idcommune: number): Observable<Agents[]> {
    return this.http.get<Agents[]>(
      environment.baseUrl + `${this.AgentUrl}/${Idcommune}`
    );
  }
}
