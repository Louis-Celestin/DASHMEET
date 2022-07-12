import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cibKlout } from '@coreui/icons';
import { data } from 'jquery';

import { NgForm } from '@angular/forms';
import { TokenStorageService } from 'src/app/services/_auth-services/token-storage.service';
import { ResetService } from 'src/app/services/_reset-password/reset.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  //public routerLink = "/dashboard/edit-profil/{{ currentUser.data.id }}";
  currentUser: any;
  Token: any;
  message: any;
  form: any = {
    email: null,
  };
  error = {
    email: null,
  };
  errorMessage = '';

  constructor(
    private router: Router,
    private token: TokenStorageService,
    private resetService: ResetService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    // //Recuperi-ons le token pour la réinitilaisation
    // this.route.queryParams.subscribe((param) => {
    //   // console.log(param.currentUser.data.token);
    //   // this.currentUser.data.token = param;
    //   console.log(param);
    //   //this.token = param['token'];
    // });
    this.currentUser.data.token;
    console.log(this.currentUser.data.token);
  }

  updateProfile() {
    this.router.navigate(['/dashboard/edit-profil']);
  }

  // onSubmit(form: NgForm) {
  //   //Chnager de mot de passe
  //   const password = form.value.password;
  //   const password_confirmation = form.value.password_confirmation;
  //   //console.log(form);
  //   this.forgotService.forgot(this.currentUser.data.token, password, password_confirmation)
  //     .subscribe(
  //       (res) => {
  //         console.log(res);
  //       },
  //       (err) => {
  //         console.log(err);
  //       }
  //     );
  // }

  onSubmit(form: NgForm): void {
    //this.wrongCredentials = false;
    const { email } = this.form;
    this.resetService.forgot(email).subscribe(
      (response: any) => {
        console.log(response);
        this.message = response.message;
        console.warn(this.form.value);
      },
      (err) => {
        //this.errorMessage = err.error;
        console.log(err.error);
        //this.wrongCredentials = true;
        this.errorMessage = err.error.errors;
      }
    );
  }
}

//routerLink="/dashboard/edit-profil/{{ currentUser.data.id }}"
