import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataList } from 'src/app/models/dataList';
import { ServiceUtilisateursService } from 'src/app/services/session-user/service-utilisateurs.service';
import { TokenStorageService } from 'src/app/services/_auth-services/token-storage.service';

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.scss'],
})
export class EditProfilComponent implements OnInit {
  id!: number;
  list: DataList = new DataList();
  currentUser: any;
  constructor(
    private Service: ServiceUtilisateursService,
    private route: ActivatedRoute,
    private router: Router,
    private token: TokenStorageService
  ) {}

  //Modification du profil user
  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.id = this.route.snapshot.params['id'];

    this.Service.getUserById(this.id).subscribe(
      (data) => {
        this.list = data;
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.Service.updateUser(this.id, this.list).subscribe((data) => {
      this.currentUser = this.token.getUser();
      this.goToUserList();
    });
  }
  goToUserList() {
    this.router.navigate(['dashboard/profile']);
  }

  updateProfile() {
    this.router.navigate(['/dashboard/edit-profil']);
  }
}
