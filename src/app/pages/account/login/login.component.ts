import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../../@core/services/customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../@core/model/user.model';
import {NotificationService} from '../../../@core/services/notification.service';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: User;
  submitted: boolean = false;
  returnUrl: string;

  constructor(private route: ActivatedRoute,
              private customerService: CustomerService,
              private notificationService: NotificationService,
              private router: Router) { }

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.user = new User();
  }

  login() {
    this.submitted = true;
    this.customerService
      .attemptAuth(this.user)
      .subscribe(
        result => {
          this.router.navigate([this.returnUrl]);
          this.notificationService.success('Enjoy the world of books', 'Welcome to the ng-bookstore');
        },
        error => {
          this.submitted = false;
        },
      );
  }

  navigateToRegister() {
    this.router.navigate(['account/register']);
  }

}
