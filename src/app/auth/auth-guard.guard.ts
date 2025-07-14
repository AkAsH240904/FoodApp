import { CanActivateFn,Router ,ActivatedRouteSnapshot,RouterStateSnapshot, CanActivate } from '@angular/router';
import { Inject, Injectable } from '@angular/core';
import { AuthService } from '../shared/auth.service';
@Injectable({
  providedIn: 'root', // Ensure the guard is provided in the root injector
})

export class AuthGuardGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true; // Allow access to the route
    } else {
      this.router.navigate(['/login']); // Redirect to login page
      return false; // Block access to the route
    }
  }
}