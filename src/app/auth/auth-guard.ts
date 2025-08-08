import { inject, Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../services/auth';


export const AuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(Auth);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true; // Allow navigation
  } else {
    // Redirect to login page if not authenticated
    return router.createUrlTree(['/login']);
  }
}


