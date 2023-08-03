import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { BACKEND_URL } from '../app.module';
import { tap } from 'rxjs';
import { User } from '@models/user.model';

export type Login = { username: string; password: string };

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private http: HttpClient,
    @Inject(BACKEND_URL) private BACKEND_URL: string
  ) {}

  login({ username: identifier, password }: Login) {
    return this.http
      .post<{ jwt: string; user: any }>(`${this.BACKEND_URL}/api/auth/local`, {
        identifier,
        password,
      })
      .pipe(
        tap(({ jwt }) => {
          if (jwt) {
            localStorage.setItem('token', jwt);
          }
        })
      );
  }

  getConnectedUser() {
    return this.http.get<User>(`${this.BACKEND_URL}/api/users/me?populate=*`);
  }

  getJwt() {
    return localStorage.getItem('token');
  }
}
