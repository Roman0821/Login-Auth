// delon.module.ts
import {
  DelonAuthConfig,
  ITokenService,
  JWTTokenModel,
  DA_SERVICE_TOKEN,
  DA_STORE_TOKEN,
  MemoryStore,
  SimpleInterceptor,
  LocalStorageStore
} from '@delon/auth';
import { ModuleWithProviders, NgModule, Inject } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
export function delonAuthConfig(): DelonAuthConfig {
  return Object.assign(new DelonAuthConfig(), {
    login_url: 'http://139.24.161.167:8080/api/authenticate',
    token_send_key: 'token',
    token_send_template: 'Bearer ${token}',
    token_send_place: 'header'
  });
}

@NgModule({})
export class DelonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DelonModule,
      providers: [
        { provide: DelonAuthConfig, useFactory: delonAuthConfig },
        { provide: DA_STORE_TOKEN, useClass: LocalStorageStore },
        { provide: HTTP_INTERCEPTORS, useClass: SimpleInterceptor, multi: true }
      ]
    };
  }
  constructor(
    @Inject(DA_SERVICE_TOKEN)
    service: ITokenService,
    private tokenService: ITokenService
  ) {
    service.set({ token: `asdf` });
    service.get().token; // output: asdf

    // 如果是 JWT
    console.log(tokenService.get(JWTTokenModel).token);
  }
}
