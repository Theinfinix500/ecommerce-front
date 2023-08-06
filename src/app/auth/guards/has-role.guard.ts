import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@services/auth.service';

export const hasRoleGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService: AuthService = inject(AuthService);
  const connectedUserRoles = authService.connectedUserRoles();
  if (route.data['role'].includes(connectedUserRoles)) {
    return true;
  }
  router.navigateByUrl('/home');
  return false;
};
