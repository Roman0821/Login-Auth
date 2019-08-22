import { Injectable } from '@angular/core';

export class FormModal {
  referral: string;
  contact: string;
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  user = new FormModal();
  constructor() { }

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
