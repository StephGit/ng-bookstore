import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {CurrentUserService} from './current-user.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import {Router} from '@angular/router';
import {NotificationService} from './notification.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private service: CurrentUserService,
              private router: Router,
              private notificationService: NotificationService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const header = 'Basic ' + btoa(this.service.getCurrentUser().email + ':' + this.service.getCurrentUser().password);
    // better to use jwt-token
    // const Authorization = 'Bearer ' + authService.getToken();
    const authReq = req.clone({ headers: req.headers.set('authorization', header)});

    return next.handle(authReq)
      .catch(error => {
        if (error.status === 401) {
          // authService.removeTokens();
          // this.router.navigate(['/account/logout']);
        }
        this.notificationService.error('Authorisation error occured', 'Unauthorized');
        return Observable.throw(error);
      }) as any;
  }
}
