import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isAuthenticated = this.authService.isAuthenticated(); // Vérifie si l'utilisateur est authentifié

    if (!isAuthenticated) {
      this.router.navigate(['/login']); // Redirige vers la page de login si l'utilisateur n'est pas authentifié
      localStorage.clear();
      return false;
    }

    return true;
  }
}
