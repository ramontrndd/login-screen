import { SnackbarService } from './snackbar.service';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { jwtDecode } from 'jwt-decode';
import { GlobalConstants } from '../../shared/global-constants';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {

  constructor(public auth: AuthService,
    public router: Router,
    private snackbarService: SnackbarService,
    private cookie: CookieService
  ) { }

  canActivate (route: ActivatedRouteSnapshot): boolean {
    let expectedRoleArray = route.data;
    expectedRoleArray = expectedRoleArray['expectedRole'];

    const token: any = this.cookie.get('token');
    var tokenPayload: any;

    try{
      tokenPayload = jwtDecode(token);
    }
    catch{
      this.cookie.delete(token);
      this.router.navigate(['/']);
    }
    let checkRole = false;

    for (let i = 0; i < expectedRoleArray['length']; i++) {
      if (expectedRoleArray[i] == tokenPayload.role) {
        checkRole = true;
      }
    }
    if (tokenPayload.role == 'user' || tokenPayload.role == 'admin') {
      if(this.auth.isAuthenticated() && checkRole) {
        return true;}

        this.snackbarService.openSnackbar(GlobalConstants.unauthroized, GlobalConstants.error);

        this.router.navigate(['/home']);
        return false;
       } else {
          this.router.navigate(['/']);
          this.cookie.delete('token')
          return false;
        }
  }

}
