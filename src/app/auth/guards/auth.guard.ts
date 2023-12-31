import { inject } from '@angular/core';
import { CanActivateFn, Router, RouterModule } from '@angular/router';
import { AuthService } from '@services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);
  if (!authService.isLoggedIn()) {
    router.navigateByUrl('auth');
    return false;
  }
  return true;
};
