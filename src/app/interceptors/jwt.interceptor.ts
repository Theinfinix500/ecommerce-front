import { LoginService } from '../services/login.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private loginService: LoginService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const url = request.url;

    const jwt = this.loginService.getJwt();

    if (jwt && !url.includes('/api/auth/local')) {
      const clonedReq = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${jwt}`),
      });
      return next.handle(clonedReq);
    }
    return next.handle(request);
  }
}
