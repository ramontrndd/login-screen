import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

import { GlobalConstants } from '../../../shared/global-constants';
import { SnackbarService } from '../../services/snackbar.service';
import { UserService } from './../../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  loginForm:any = FormGroup;
  responseMessage: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private UserService: UserService,
    private ngxService: NgxUiLoaderService,
    private snackbarService: SnackbarService,
    private cookie: CookieService
  ) {}

  ngOnInit():void {

    this.loginForm = this.formBuilder.group({
      email:[null, [Validators.required,Validators.pattern(GlobalConstants.emailRegex)]],
      password: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(20)]]
    })
  }

  handleSubmit() {
    this.ngxService.start();
    var formData = this.loginForm.value;
    var data = {
      email: formData.email,
      password: formData.password
    }
    this.UserService.login(data).subscribe((response:any ) => {
      this.ngxService.stop();
      this.router.navigate(['/']);
      this.cookie.set('token', response.token);
      this.snackbarService.openSnackbar('Login realizado com sucesso!', this.responseMessage)
    },(error)=> {
      this.ngxService.stop();
      if(error.error?.message){
        this.responseMessage = error.error?.message;
      }
      else {
        this.responseMessage = GlobalConstants.genericError;
      }
      this.snackbarService.openSnackbar(this.responseMessage,GlobalConstants.error);
    });
  }

}
