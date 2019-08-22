import {
  Component,
  OnInit,
} from '@angular/core';
import {
  FormGroup,
} from '@angular/forms';
import {
  Router
} from '@angular/router';
import {
  TokenService
} from '../../service/token.service';
import {
  UserService
} from '../../service/users.service';
import {
  ApiService
} from 'src/app/service/api.service';

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
  validateForm: FormGroup;
  authenticationError: boolean;
  credentials: any;
  userList = [];
  error: boolean;
  constructor(
    private router: Router,
    private tokenservice: TokenService,
    private userservice: UserService,
    private apiservice: ApiService
  ) {
    this.user = {
      username: '',
      password: '',
      rememberMe: false
    };
    this.credentials = {};
  }

  async login() {
    try {
    console.log('button clicked!');
    for (const i of Object.keys(this.validateForm.controls)) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    const body = {
      username: this.user.username,
      password: this.user.password,
      rememberMe: this.user.rememberMe
    };
    const res = await this.apiservice.post('authenticate', body);
    console.log('res', res);
    if (!res) {
      return;
    }
    this.tokenservice.set('token', res.id_token);
    this.tokenservice.set('remember', this.user.rememberMe);
    let user: any;
    user = await this.apiservice.get('account');
    console.log('user', user);
    this.userservice.set('login', user.login);
    this.userservice.set('firstName', user.firstName);
    this.userservice.set('lastName', user.lastName);
    this.userservice.set('authorities', user.authorities);
    if (user.authorities.indexOf('ROLE_ADMIN') > -1) {
      this.router.navigateByUrl('iot');
    } else {
      this.router.navigateByUrl('main');
    }
    } catch (exception) {
      this.error = true;
    }
  }
}
