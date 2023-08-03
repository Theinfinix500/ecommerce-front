import { AuthService } from '@services/auth.service';
import { NgModule, InjectionToken, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from './jwt.interceptor';
import { take } from 'rxjs';
import { LoginService } from '@services/login.service';

export const BACKEND_URL = new InjectionToken<string>('BACKEND_URL');

function connectedUserInit(
  authService: AuthService,
  loginService: LoginService
) {
  const jwt = loginService.getJwt();
  return (): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (jwt) {
        authService
          .initConnectedUser()
          .pipe(take(1))
          .subscribe({
            next: () => {
              resolve();
            },
            error: () => {
              reject();
            },
          });
      } else {
        resolve();
      }
    });
  };
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, HttpClientModule],
  providers: [
    { provide: BACKEND_URL, useValue: 'http://localhost:1337' },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    {
      provide: APP_INITIALIZER,
      useFactory: connectedUserInit,
      multi: true,
      deps: [AuthService, LoginService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
