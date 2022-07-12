import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/utilisateurs-model';
import { LoginService } from 'src/app/services/login-service/login.service';
import { Login } from 'src/app/models/login';
import { AuthService } from 'src/app/services/_auth-services/auth.service';
import { TokenStorageService } from 'src/app/services/_auth-services/token-storage.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  //nos variables
  form: any = {
    phone: null,
    password: null,
  };
  //Chemin d'accès pour l'image
  public loginImg = '../../../../assets/images/city.webp';
  //chemin d'accès lorsque le mot de passe est oublié
  public forgot = '../forgot-password';

  //les variables de recuperations des
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {}
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().data.IdTypeUtilisateur;
    }
  }

  //   onSubmit(): void {
  //     alert('mu');
  //     const { phone, password } = this.form;
  //     this.authService.addlogin(phone, password).subscribe({
  //       next: (response: any) => {
  //         if (response.status == 'true') {
  //           // this.tokenStorage.saveToken(response.data.token);
  //           // this.tokenStorage.saveUser(response);
  //           // this.isLoginFailed = false;
  //           // this.isLoggedIn = true;
  //           console.log('navigate to profile');
  //           // this.router.navigate(['dashboard']);
  //           // this.roles = this.tokenStorage.getUser().data.IdTypeUtilisateur;
  //           //console.log(this.roles);
  //         }
  //       },
  //       error: () => {
  //         this.errorMessage = 'error.error.message';
  //         this.isLoginFailed = true;
  //       },
  //     });
  //   }
  // }

  onSubmit(): void {
    const { phone, password } = this.form;
    this.authService.addlogin(phone, password).subscribe({
      next: (response) => {
        this.tokenStorage.saveToken(response.data.token);
        this.tokenStorage.saveUser(response);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().data.IdTypeUtilisateur;
        // console.log(this.roles);
        console.log('navigate to profile');
        //this.router.navigate(['dashboard']);

        if (response.data.IdTypeUtilisateur === 'admin') {
          this.router.navigate(['/dashboard/admin-board']);
        } else if (response.data.IdTypeUtilisateur === 'agent') {
          this.router.navigate(['/dashboard/agents-board']);
        }
        //this.roles = this.tokenStorage.getUser().data.IdTypeUtilisateur;
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      },
    });
  }
  // reloadPage(): void {
  //   window.location.reload();
  // }
}
