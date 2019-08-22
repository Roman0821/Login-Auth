import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from '@angular/router';

import { User } from '../login/login.component';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ITokenService, DA_SERVICE_TOKEN } from '@delon/auth';

@Injectable()
export class LoginAuth implements CanActivate {
  constructor(
    public router: Router,
    @Inject(DA_SERVICE_TOKEN) public tokenService: ITokenService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const token = this.tokenService.get().token;
    if (token) {
      console.log('路由守卫验证通过!');
      alert('路由守卫验证通过!');
      return true;
    } else {
      console.log('路由守卫验证失败!');
      alert('路由守卫验证失败!');
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
