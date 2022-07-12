import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataList } from 'src/app/models/dataList';
import { ServiceUtilisateursService } from 'src/app/services/session-user/service-utilisateurs.service';
import { TokenStorageService } from 'src/app/services/_auth-services/token-storage.service';

@Component({
  selector: 'app-liste-utilisateurs',
  templateUrl: './liste-utilisateurs.component.html',
  styleUrls: ['./liste-utilisateurs.component.scss'],
})
export class ListeUtilisateursComponent implements OnInit {
  //Déclarons la vraiable pour le modele creer
  //userList: DataList = new DataList();
  userList!: DataList[];
  //datatables
  dtOptions: DataTables.Settings = {};
  //initialisons la variable de recuperation
  currentUser: any;
  //Alert message
  alert: boolean = false;

  constructor(
    private userService: ServiceUtilisateursService,
    private router: Router,
    private token: TokenStorageService
  ) {}

  ngOnInit(): void {
    //Datatables
    this.dtOptions = {
      pagingType: 'full_numbers',
      processing: true,
    };
    this.currentUser = this.token.getUser();
    this.getUser();
  }

  //CREONS LA FUNCTION
  private getUser() {
    this.userService
      .getUserList(this.currentUser.data.Idcommune)
      .subscribe((response) => {
        this.userList = response;
        console.log(this.userList);
      });
  }

  //Update user list
  UpdateUser(id: number) {
    this.router.navigate(['/utilisateurs/modifier-utilisateurs', id]);
  }

  //DELETE USERS
  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe((data) => {
      console.log(data);
      this.getUser();
      this.alert = true;
    });
  }

  //METHODE POUR L'ALERTE DE SUPPRESSION
  visible: boolean = false;

  onVisibleChange(eventValue: boolean) {
    this.visible = eventValue;
  }

  onResetDismiss() {
    this.visible;
  }

  //function de fermerture du boutton
  closeAlert() {
    this.alert = true;
  }
}
