import { Component, OnInit } from '@angular/core';
import {
  NgForm,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { ForgotService } from 'src/app/services/_forgot-password/forgot.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  error = {
    email: null,
  };

  form: any = {
    email: null,
  };
  wrongCredentials = false;

  errorMessage = '';

  constructor(private forgotService: ForgotService) {}
  message: any;
  ngOnInit(): void {}

  onSubmit(form: NgForm): void {
    this.wrongCredentials = false;
    const { email } = this.form;
    this.forgotService.forgot(email).subscribe(
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
