import { Component, OnInit } from '@angular/core';
import {User} from '../../../@core/data/model/user.model';
import {CustomerService} from '../../../@core/data/services/customer.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  showMessages: any;
  errors: string[];
  messages: string[];
  user: User;
  submitted: boolean;
  returnUrl: string;

  constructor(private route: ActivatedRoute,
              private customerService: CustomerService,
              private router: Router) { }

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.customerService
      .attemptAuth(this.user)
      .subscribe(
        result => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.errors.push(error);
          this.submitted = false;
        }
      );
  }

}
