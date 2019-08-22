import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';
import { DelonAuthModule, JWTInterceptor } from '@delon/auth';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DelonAuthConfig } from '@delon/auth';
import { CallbackComponent } from './callback/callback.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RoutesModule } from './routes/routes.module';
import { RoutesRoutingModule } from './routes/routes-routing.module';
import { LoginAuth} from './routes/auth/loginauth';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FullCalendarModule } from '@fullcalendar/angular'; // for FullCalendar!

registerLocaleData(en);


@NgModule({

  imports: [
    BrowserModule, FormsModule, HttpClientModule, RoutesModule,
    RoutesRoutingModule,
    DelonAuthModule,
    NgZorroAntdModule,
    BrowserAnimationsModule,
    FullCalendarModule
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ],
  providers: [
    // 指定认证风格对应的HTTP拦截器
    LoginAuth,
    { provide: NZ_I18N, useValue: en_US },
  ]
})
export class AppModule { }
