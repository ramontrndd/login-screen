import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { ConfirmationComponent } from '../../dialog/confirmation/confirmation.component';
import { ChangePasswordComponent } from '../../pages/change-password/change-password.component';

@Component({
  selector: 'app-fullcomponent',
  templateUrl: './full.component.html',
  styleUrl: './full.component.scss',
})
export class FullComponent {
  constructor(
    private router: Router,
    private dialog: MatDialog,
    private cookie: CookieService
  ) {}

  logout() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      message: 'Logout',
    };
    const dialogRef = this.dialog.open(ConfirmationComponent, dialogConfig);
    const sub = dialogRef.componentInstance.onEmitStatusChange.subscribe(
      (user) => {
        dialogRef.close();
        this.cookie.deleteAll();
        this.router.navigate(['/']);
      }
    );
  }

  changePassword() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px';
    this.dialog.open(ChangePasswordComponent, dialogConfig);
  }
}
