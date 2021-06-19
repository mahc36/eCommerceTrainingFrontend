import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RedirecToUserGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean {
    this.router.navigate(['user/users']);
    return false;
  }

}
