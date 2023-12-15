import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, Router, UrlSegmentGroup, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn & CanActivateChildFn = (route, state) => {

  const authService = inject(AuthService);
  const router = inject(Router);
  let isSginedIn = authService.isSignedIn();

  if(isSginedIn)
    return true;
  else
      return router.createUrlTree(['/login']);//TODO rewrite youself to pass original url to route
};

