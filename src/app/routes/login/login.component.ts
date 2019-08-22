import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  ITokenService,
  DA_SERVICE_TOKEN
} from '@delon/auth';
import { Router } from '@angular/router';

export class User {
  public username: string;
  public password: string;
  public rememberMe: boolean;
}



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {
user: User;

  constructor(
    public http: HttpClient,
    public router: Router,
    @Inject(DA_SERVICE_TOKEN) public tokenService: ITokenService
  ) {

    this.user = {username: '', password: '', rememberMe: null};
  }

  login() {
    console.log('button clicked!');


    this.http
      .post('http://139.24.161.167:8080/api/authenticate', {
        username: this.user.username,
        password: this.user.password,
        rememberMe: this.user.rememberMe,
      })
      .subscribe((res: any) => {
        console.log('remem',this.user.rememberMe);
        if (res.id_token === null) {
          return;
        }
        // 设置用户Token信息
        this.tokenService.set({ token: res.id_token});

        //设置URL跳转
        let url = 'dashboard';
        this.router.navigateByUrl(url);
      });
  }
}
