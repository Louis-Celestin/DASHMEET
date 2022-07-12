import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ResetService } from 'src/app/services/_reset-password/reset.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private resetService: ResetService
  ) {}

  error = {
    password: null,
  };
  message: any;
  //variables
  token: any;
  ngOnInit(): void {
    //Recuperi-ons le token pour la réinitilaisation
    this.route.queryParams.subscribe((param) => {
      //console.log(param);
      console.log((this.token = param['token']));
      //this.token = param.token;
    });
  }

  onSubmit(form: NgForm) {
    const password = form.value.password;
    const password_confirmation = form.value.password_confirmation;
    console.log(form);

    this.resetService
      .reset(this.token, password, password_confirmation)
      .subscribe(
        (res: any) => {
          console.log(res);
          this.message = res.message;
        },
        (err) => {
          //console.log(err);
          this.error = err.error.errors;
        }
      );
  }
}
