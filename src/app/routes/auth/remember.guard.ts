import { CanActivate, Router } from '@angular/router';

import { Injectable } from '@angular/core';
import { TokenService } from '../../service/token.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable()
export class RememberGuard  {
  constructor(
    public router: Router,
    public tokenservice: TokenService,
    public jwtHelper: JwtHelperService
  ) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    const token = this.tokenservice.get('token');
    const isExpired = this.jwtHelper.isTokenExpired(token);
    console.log(this.jwtHelper.getTokenExpirationDate(token));
    if (isExpired === true) {
      return true;
    } else {
      const authorities = this.tokenservice.get('authorities');
      if (authorities.indexOf('ROLE_ADMIN') > -1) {
        this.router.navigateByUrl('iot');
      } else {
        this.router.navigateByUrl('main');
      }
      return false;
    }
  }
}
