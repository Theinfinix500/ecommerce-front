import { tap } from 'rxjs';
import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService
      .signIn(this.login)
      .pipe(
        tap((result) => {
          if (result) this.router.navigateByUrl('home');
        })
      )
      .subscribe();
  }
}
