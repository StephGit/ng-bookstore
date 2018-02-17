import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {CurrentUserService} from './current-user.service';

@Injectable()
export class LogoutGuardService implements CanActivate {

  constructor(
    private router: Router,
    private currentUserService: CurrentUserService,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.currentUserService.purgeAuth();
    this.router.navigate(['']);
    return true;
  }
}
