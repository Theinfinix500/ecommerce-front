import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  login: any = {
    username: '',
    password: '',
  };

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.signIn(this.login).subscribe();
  }
}
