import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_API_ENDPOINT } from '../config/base-api';

interface LoginResponse {
  token: string;
  message: string;
  role: string;
  username: string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private httpClient: HttpClient) { }

  login(username: string, password: string) {
    return this.httpClient.post<LoginResponse>(BASE_API_ENDPOINT + 'login', {
      username,
      password
    });
  }

  signup(username: string, email: string, password: string) {
    return this.httpClient.post<LoginResponse>(BASE_API_ENDPOINT + 'signup', {
      username,
      email,
      password
    });
  }
}
