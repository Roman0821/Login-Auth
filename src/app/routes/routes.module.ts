import { NgModule } from '@angular/core';
import { RoutesRoutingModule } from './routes-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // for FullCalendar!

@NgModule({
  imports: [
    RoutesRoutingModule,
    FormsModule,
    FullCalendarModule
  ],
  declarations: [
    LoginComponent,
    DashboardComponent,
    MainComponent
  ]
})

export class RoutesModule {}
