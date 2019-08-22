import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class TokenService {

  constructor() {}

  set(key: string, val: any) {
    localStorage.setItem(key, val);
  }

  get(data: string): string | null {
    const item = localStorage.getItem(data);
    return item;
  }

  clear() {
    localStorage.clear();
  }
}
