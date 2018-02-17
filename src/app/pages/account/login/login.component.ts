import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../../@core/services/customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../@core/model/user.model';

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
