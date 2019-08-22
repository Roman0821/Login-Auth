import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})

export class ApiService {

  private baseUrl = 'http://139.24.161.167:8080/api';

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) {
  }

  post(API, body): Promise<any> {
      return this.http.post(`${this.baseUrl}/${API}`, body, {
        headers: { Authorization: `Bearer ${this.tokenService.get('token')}` }
      }).toPromise();
  }

  get(API) {
    return this.http.get(`${this.baseUrl}/${API}`, {
      headers: { Authorization: `Bearer ${this.tokenService.get('token')}` }
    }).toPromise();
  }
}
