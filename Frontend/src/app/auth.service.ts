import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInKey = 'isLoggedIn';
  private loggedInStatus = new BehaviorSubject<boolean>(this.isUserLoggedIn());

  constructor() {
    const isLoggedIn = localStorage.getItem(this.isLoggedInKey);
    if (isLoggedIn === null) {
      localStorage.setItem(this.isLoggedInKey, 'false');
    }
  }

  loginUser(username: string, password: string): { status: boolean, message: string } {
    if (username === 'admin' && password === 'Shre@123') {
      localStorage.setItem(this.isLoggedInKey, 'true');
      this.loggedInStatus.next(true);
      return { status: true, message: 'Login successful' };
    } else {
      return { status: false, message: 'Invalid credentials' };
    }
  }

  logoutUser(): void {
    localStorage.setItem(this.isLoggedInKey, 'false');
    this.loggedInStatus.next(false);
  }

  isUserLoggedIn(): boolean {
    return localStorage.getItem(this.isLoggedInKey) === 'true';
  }

  getLoggedInStatus() {
    return this.loggedInStatus.asObservable();
  }
}
