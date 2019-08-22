import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SimpleGuard, JWTGuard } from '@delon/auth';
import {LoginAuth} from './auth/loginauth';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },

  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [LoginAuth],

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })

export class RoutesRoutingModule { }
