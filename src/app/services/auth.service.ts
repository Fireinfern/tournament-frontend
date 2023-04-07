import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean = false;

  constructor() {
    let token = localStorage.getItem('token');
    if (token) this.isAuthenticated = true;
  }

}
