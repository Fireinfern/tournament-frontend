import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean = false;
<<<<<<< HEAD
  constructor() { }
=======
  constructor() {
    let token = localStorage.getItem('token');
    if (token) this.isAuthenticated = true;
  }
>>>>>>> 1d661c33157939da8e3a77ccc1a0e37540cb59b0
}
