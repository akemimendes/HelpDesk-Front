import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Credenciais } from '../models/credenciais';
import { API_CONFIG } from '../config/api.config';
import { JwtHelperService } from '@auth0/angular-jwt';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  jwtService: JwtHelperService = new JwtHelperService;
  private isBrowser: boolean;

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  authenticate(creds: Credenciais) {
    return this.http.post(`${API_CONFIG.baseUrl}/login`, creds, {
      observe: 'response',
      responseType: 'text'
    })
  }

  successfulLogin(authToken: string) {
    if (this.isBrowser) {
      localStorage.setItem('token', authToken);
    }
  }

  isAuthenticated() {
    if (this.isBrowser) {
      let token = localStorage.getItem('token')
      if (token != null) {
        return !this.jwtService.isTokenExpired(token)
      }
    }
    return false;

  }

  logout() {
    if (this.isBrowser) {
      localStorage.clear();
    }
  }

}
