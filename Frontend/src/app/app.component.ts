import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.getLoggedInStatus().subscribe(status => {
      this.isLoggedIn = status;
    });
    this.isLoggedIn = this.authService.isUserLoggedIn();
  }

  logout() {
    this.authService.logoutUser();
    this.router.navigate(['login']);
  }
}
