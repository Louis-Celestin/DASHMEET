import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataList } from 'src/app/models/dataList';
import { Informations } from 'src/app/models/information';
import { Projet } from 'src/app/views/projets/projet';
import { environment } from 'src/environments/environment';
import { Probleme } from '../../models/probleme';
import { Sondage } from 'src/app/views/sondages/sondage.model';
import { Collecte } from '../../models/collectes';

@Injectable({
  providedIn: 'root',
})
export class CountService {
  count_User = '/usersCommuneCount';
  count_projet = '/projetsCommuneCount';
  count_infos = '/informationsCommuneCount';
  count_problemes = '/totalProbleme';
  count_sondages = '/totalSondage';
  count_collectes = '/totalCollecte';
  count_parkings = '/totalParking';
  count_values = '/values';

  constructor(private http: HttpClient) {}

  //Affichons le nombre d'utilisateur en fonction de la commune de l'admin

  getUserCount(Idcommune: number): Observable<DataList[]> {
    return this.http.get<DataList[]>(
      environment.baseUrl + `${this.count_User}/${Idcommune}`
    );
  }

  //Affichons le nombre d'utilisateur en fonction de la commune de l'admin
  getProjetCount(): Observable<Projet[]> {
    return this.http.get<Projet[]>(
      environment.baseUrl + `${this.count_projet}`
    );
  }

  //Affichons le nombre d'utilisateur en fonction de la commune de l'admin
  getInfosCount(Idcommune: number): Observable<Informations[]> {
    return this.http.get<Informations[]>(
      environment.baseUrl + `${this.count_infos}/${Idcommune}`
    );
  }

  getProblemesCount(Idcommune: number): Observable<Probleme[]> {
    return this.http.get<Probleme[]>(
      environment.baseUrl + `${this.count_problemes}/${Idcommune}`
    );
  }

  getSondagesCount(Idcommune: number): Observable<any> {
    return this.http.get<any>(
      environment.baseUrl + `${this.count_sondages}/${Idcommune}`
    );
  }

  getCollectesCount(Idcommune: number): Observable<Collecte[]> {
    return this.http.get<Collecte[]>(
      environment.baseUrl + `${this.count_collectes}/${Idcommune}`
    );
  }

  // getParkingsCount(Idcommune: number): Observable<Parking[]> {
  //   return this.http.get<Parking[]>(
  //     environment.baseUrl + `${this.count_parkings}/${Idcommune}`
  //   );
  // }
  getValues(Idcommune: number) {
    return this.http.get<any>(
      environment.baseUrl + `${this.count_values}/${Idcommune}`
    );
  }
}
