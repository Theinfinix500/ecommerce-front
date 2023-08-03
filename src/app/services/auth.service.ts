import { Login, LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { User } from '@models/user.model';
import {
  BehaviorSubject,
  of,
  switchMap,
  tap,
  catchError,
  throwError,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(
    !!this.loginService.getJwt() || false
  );
  private _connectedUser = new BehaviorSubject<User | null>(null);

  constructor(private loginService: LoginService) {}

  signIn(credentials: Login) {
    return this.loginService.login(credentials).pipe(
      switchMap(({ jwt }) => {
        if (jwt) {
          this._isLoggedIn$.next(true);
          return this.initConnectedUser();
        }
        return of(null);
      })
    );
  }

  isLoggedIn() {
    return this._isLoggedIn$.value || !!this.loginService.getJwt();
  }

  isLoggedIn$() {
    return this._isLoggedIn$.asObservable();
  }

  initConnectedUser() {
    return this.loginService.getConnectedUser().pipe(
      tap((user) => {
        this._connectedUser.next(user);
        // this.router.navigateByUrl('home');
      }),
      catchError((error) => {
        return throwError(() => new Error(error));
      })
    );
  }

  connectedUserRoles() {
    return this._connectedUser.value?.role.name;
  }
}
