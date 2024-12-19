import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  serverErrors: string;

  constructor(private authService: AuthService, private router: Router) {
    this.serverErrors = "";
  }

  loginEventHandler(loginForm: any) {
    const result = this.authService.loginUser(loginForm.value.emailId, loginForm.value.password);
    if (result.status) {
      alert("Login Successful");
      this.router.navigate(['edit-portfolio']);
    } else {
      this.serverErrors = result.message;
      alert(this.serverErrors);
    }
  }

  redirectToRegister() {
    this.router.navigate(["register"]);
  }

  logout() {
    this.authService.logoutUser();
    alert("Logged out successfully");
    this.router.navigate(['login']);
  }
}
