import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Parkings } from 'src/app/models/parkings';
import { Category } from 'src/app/models/category';
import { environment } from 'src/environments/environment';
import { Communes } from 'src/app/models/communes';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ParkingsService {
  parking_Url = '/mappingIndex';
  parking_Store = '/mappingStore';
  parking_Show = '/mappingShow/';
  category_Url = '/catIndex';
  //url Communes
  street_Url = '/communeIndex';
  constructor(private http: HttpClient) {}

  //Enregistrement de parkings
  createParkings(parking: Parkings) {
    return this.http.post(
      environment.baseUrl + `${this.parking_Store}`,
      parking
    );
  }
  //Liste des parkings
  getParkingsList(): Observable<Parkings[]> {
    return this.http.get<Parkings[]>(
      environment.baseUrl + `${this.parking_Url}`
    );
  }

  //Récuperation d'un parkings
  getParkingById(id: number): Observable<Parkings> {
    return this.http.get<Parkings>(
      environment.baseUrl + `${this.parking_Show}/${id}`
    );
  }

  //Modification du parkings
  updateParking(id: number, parking: Parkings): Observable<Object> {
    return this.http.put(
      environment.baseUrl + `${this.parking_Url}/${id}`,
      parking
    );
  }

  //Suppression du parkings
  deleteParking(id: number, parking: Parkings): Observable<Object> {
    return this.http.delete(environment.baseUrl + `${this.parking_Url}/${id}`);
  }

  //Recuperation des catégories
  //Liste des parkings
  getCategoryList(): Observable<Category[]> {
    return this.http.get<Category[]>(
      environment.baseUrl + `${this.category_Url}`
    );
  }

  //READ STREET API Communes[] is a modele
  getStreetList(): Observable<Communes[]> {
    return this.http.get<Communes[]>(
      environment.baseUrl + `${this.street_Url}`
    );
  }
}
