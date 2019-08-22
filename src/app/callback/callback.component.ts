import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {
  socialService: any;
  constructor() {}

  ngOnInit() {
    // 1、默认根据当前URL地址
    this.socialService.callback();
    // 2、非 `{ useHash: true }` 路由
    this.socialService.callback(
      `/callback?token=40SOJV-L8oOwwUIs&name=cipchk&uid=1`
    );
    // 3、带有 `{ useHash: true }` 路由
    this.socialService.callback(
      `/?token=40SOJV-L8oOwwUIs&name=cipchk&uid=1#/callback`
    );
    // 4、指定 `ITokenModel` 对象
    this.socialService.callback({
      token: '123456789',
      name: 'cipchk',
      id: 10000,
      time: +new Date()
    });
  }
}
