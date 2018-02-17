import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {CurrentUserService} from './current-user.service';


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private currentUserService: CurrentUserService,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    if (this.currentUserService.isAuthenticated) {
      return  Observable.create(true);
    } else {
      // not logged in so redirect to login page with the return url and return false
      this.router.navigate(['login'], { queryParams: { returnUrl: state.url }});
      return Observable.create(false);
    }
  }
}
