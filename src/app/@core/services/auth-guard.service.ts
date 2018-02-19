import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {CurrentUserService} from './current-user.service';


@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {

  constructor(
    private router: Router,
    private currentUserService: CurrentUserService,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.currentUserService.isAuthenticated) {
      return  true
    } else {
      // not logged in so redirect to login page with the return url and return false
      this.router.navigate(['login'], { queryParams: { returnUrl: state.url }});
      return false;
    }
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.currentUserService.isAuthenticated) {
      return  true
    } else {
      // not logged in so redirect to login page with the return url and return false
      this.router.navigate(['login'], { queryParams: { returnUrl: state.url }});
      return false;
    }
  }
}
