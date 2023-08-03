import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '@services/auth.service';

export const hasRoleGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);
  const connectedUserRoles = authService.connectedUserRoles();
  if (route.data['role'].includes(connectedUserRoles)) {
    return true;
  }
  return false;
};
