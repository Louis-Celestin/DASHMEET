import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sondage, Option } from 'src/app/views/sondages/sondage.model';

@Injectable({
  providedIn: 'root',
})
export class SondageService {
  baseURL = '';

  constructor(private httpClient: HttpClient) {}

  getSondages(): Observable<Sondage[]> {
    this.baseURL = 'http://192.168.252.201:8000/api/sondageIndex';
    return this.httpClient.get<Sondage[]>(`${this.baseURL}`);
  }

  getSondagesIdOne(id: number):Observable<Sondage>{
    this.baseURL = 'http://192.168.252.201:8000/api/sondageIdSondage';
    return this.httpClient.get<Sondage>(`${this.baseURL}/${id}`);
  }

  createSondage(sondage: Sondage): Observable<Object> {
    this.baseURL = '	http://192.168.252.201:8000/api/sondageStore';
    return this.httpClient.post(`${this.baseURL}`, sondage);
  }

  createOption(option: Option): Observable<Object> {
    this.baseURL = 'http://192.168.252.201:8000/api/optionStore';
    return this.httpClient.post(`${this.baseURL}`, option);
  }

  getSondageId(id: number): Observable<Sondage> {
    this.baseURL = 'http://192.168.252.201:8000/api/sondageShow';
    return this.httpClient.get<Sondage>(`${this.baseURL}/${id}`);
  }

  updateSondage(id: number, sondage: Sondage): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, sondage);
  }

  deleteSondage(id: number): Observable<Object> {
    this.baseURL = 'http://192.168.252.201:8000/api/sondageDelete';
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
