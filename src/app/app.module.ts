import { AuthService } from '@services/auth.service';
import {
  NgModule,
  InjectionToken,
  APP_INITIALIZER,
  LOCALE_ID,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from './jwt.interceptor';
import { take } from 'rxjs';
import { LoginService } from '@services/login.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import {
  LazyLoadImageModule,
  LAZYLOAD_IMAGE_HOOKS,
  ScrollHooks,
} from 'ng-lazyload-image';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeFr);

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
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    LazyLoadImageModule,
  ],
  providers: [
    { provide: BACKEND_URL, useValue: 'http://localhost:1337' },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    {
      provide: APP_INITIALIZER,
      useFactory: connectedUserInit,
      multi: true,
      deps: [AuthService, LoginService],
    },
    { provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks },
    { provide: LOCALE_ID, useValue: 'fr-FR' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
