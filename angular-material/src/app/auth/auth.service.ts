import { Subject } from 'rxjs/Subject'
import { Injectable } from '@angular/core';
import { User } from './user.model';
import { AuthData } from './auth-data.model'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  authChange = new Subject<boolean>();
  private user: User;

  registerUser(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 1000).toString()
    };
    this.authChange.next(true);
    // this.router.navigate('/training');
  }

  login(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 1000).toString()
    };
    this.authChange.next(true);
    // this.router.navigate('/login');
  }

  logout() {
    this.user = null;
    this.authChange.next(false);
    // this.router.navigate('/login');
  }

  getUser() {
    return { ...this.user };
  }

}
