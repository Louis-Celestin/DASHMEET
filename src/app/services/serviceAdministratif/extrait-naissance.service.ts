import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceAdministratif } from 'src/app/models/service-administratif';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ExtraitNaissanceService {
//Déclaration des endPoints
getAffichageAllExtrait ='/ExtNaisIndex';
getAffigeOneExtrait = '/ExtNaisShow';

  constructor(private http:HttpClient) { }

  getAllExtrait():Observable<ServiceAdministratif[]>{
  return this.http.get<ServiceAdministratif[]>(environment.baseUrl+`${this.getAffichageAllExtrait}`);

  }
  getOneExtrait(id:number):Observable<ServiceAdministratif>{
    return this.http.get<ServiceAdministratif>(environment.baseUrl+`${this.getAffigeOneExtrait}/${id}`);
  }


  editerNais(jsonDonnee:JSON){
    const data = {
      jsonDonnee:jsonDonnee
    }

    return this.http.post('http:localhost:8000/ExtNaisUpdated/{user}',data);
  }

  updateExtrait(id: number, data: ServiceAdministratif): Observable<Object>{
    return this.http.put(environment.baseUrl +`${id}`, data);
  }

}
