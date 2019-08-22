import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SimpleGuard, JWTGuard } from '@delon/auth';
import { LoginAuth } from './auth/loginauth';
import { MainComponent } from './main/main.component';
import { RememberGuard } from './auth/remember.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  {
    path: 'login',
    component: LoginComponent,
    // canActivate: [RememberGuard],
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
