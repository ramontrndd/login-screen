import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

import { GlobalConstants } from '../../../shared/global-constants';
import { ForgotPasswordComponent } from '../../pages/forgot-password/forgot-password.component';
import { RegisterComponent } from '../../pages/register/register.component';
import { SnackbarService } from '../../services/snackbar.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  loginForm: any = FormGroup;
  responseMessage: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private ngxService: NgxUiLoaderService,
    private snackbarService: SnackbarService,
    private cookie: CookieService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if(this.cookie.get('token') !=null) {
      this.userService.checkToken().subscribe((response: any)=> {
        this.router.navigate(['/home']);
      },(error:any)=> {
        console.log(error);
      })

  }
    this.loginForm = this.formBuilder.group({
      email: [
        null,
        [Validators.required, Validators.pattern(GlobalConstants.emailRegex)],
      ],
      password: [
        null,
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20),
        ],
      ],
    });
  }

  handleSubmit() {
    this.ngxService.start();
    var formData = this.loginForm.value;
    var data = {
      email: formData.email,
      password: formData.password,
    };
    this.userService.login(data).subscribe(
      (response: any) => {
        this.ngxService.stop();
        this.cookie.set('token', response.token);
        this.router.navigate(['/home']);
        this.snackbarService.openSnackbar(
          'Login realizado com sucesso!',
          this.responseMessage
        );
      },
      (error) => {
        this.ngxService.stop();
        if (error.error?.message) {
          this.responseMessage = error.error?.message;
        } else {
          this.responseMessage = GlobalConstants.genericError;
        }
        this.snackbarService.openSnackbar(
          this.responseMessage,
          GlobalConstants.error
        );
      }
    );
  }

  registerAction() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '550px';
    this.dialog.open(RegisterComponent, dialogConfig);
  }
  forgotPasswordAction() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '550px';
    this.dialog.open(ForgotPasswordComponent, dialogConfig);
  }
}
