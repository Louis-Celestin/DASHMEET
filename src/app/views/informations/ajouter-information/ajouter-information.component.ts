import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { InformationService } from '../information.service';
import { Information } from '../information';
import { Communes } from 'src/app/models/communes';
import { Typeinformation } from '../typeinformation';
import { FormsModule } from '@angular/forms';
import { InformationsService } from 'src/app/services/informations/informations.service';
import { TokenStorageService } from 'src/app/services/_auth-services/token-storage.service';
import { Informations } from 'src/app/models/information';
import { TypeInformations } from 'src/app/models/type-informations';
import { error } from '@angular/compiler/src/util';
import { ServiceUtilisateursService } from 'src/app/services/session-user/service-utilisateurs.service';

@Component({
  selector: 'app-ajouter-information',
  templateUrl: './ajouter-information.component.html',
  styleUrls: ['./ajouter-information.component.scss'],
})
export class AjouterInformationComponent implements OnInit {
  // id = this.actRoute.snapshot.params['id'];
  // informations: any;
  // user: Informations = new Informations();
  information: Informations = new Informations();
  commune!: Communes[];
  infos!: TypeInformations[];
  //Instance de notre models communes
  street!: Communes[];

  //variable attendue
  currentUser: any;
  scope: any;
  //Alert message
  alert: boolean = false;

  constructor(
    private informationService: InformationsService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private token: TokenStorageService,
    private userStreet: ServiceUtilisateursService
  ) {}

  ngOnInit(): void {
    // this.getTypeInfos();
    // this.getAllInfos();
    // //this.saveInfo();
    // this.getCommunes();
    // this.getTypeInfos();
    this.currentUser = this.token.getUser();
    this.getTypeInfos();
    this.getStreetList();
  }

  saveInformation() {
    //recuperer l'id user
    this.information.IdUser = this.currentUser.data.id;
    //Recuperation des informations sur sa commune
    this.information.IdCommune = this.currentUser.data.Idcommune;
    //Function qui pointe sur le service
    this.informationService
      .createInformation(this.currentUser.data.id, this.information)
      .subscribe(
        (response) => {
          console.log(response);
          this.scope = this.currentUser.data.id;
          // console.log(this.scope);
        },
        (error) => console.log(error)
      );
  }

  onSubmit() {
    console.log(this.information);
    this.saveInformation();
    this.scope = this.currentUser.data.id;
    console.log(this.scope);
    this.alert = true;
  }

  //methode pour lister les types d'informations

  private getTypeInfos() {
    this.informationService.getTypeInfosList().subscribe((data) => {
      this.infos = data;
    });
  }

  //Listes des communes
  private getStreetList() {
    this.userStreet.getStreetList().subscribe((data) => {
      this.street = data;
    });
  }

  visible = false;

  onVisibleChange(eventValue: boolean) {
    this.visible = eventValue;
  }

  onResetDismiss() {
    this.visible = true;
  }

  //function de fermerture du boutton
  closeAlert() {
    this.alert = true;
  }
}
