import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../../@core/data/services/customer.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  errors: string[] = [];
  user: any = {};
  submitted: boolean = false;
  returnUrl: string;

  constructor(private route: ActivatedRoute,
              private customerService: CustomerService,
              private router: Router) { }

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.errors = [];
    this.submitted = true;
    this.customerService
      .attemptAuth(this.user)
      .subscribe(
        result => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.errors.push(error);
          this.submitted = false;
        },
      );
  }

}
