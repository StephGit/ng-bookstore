import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomerService} from '../../../@core/services/customer.service';
import {Customer} from '../../../@core/model/customer.model';
import {User} from '../../../@core/model/user.model';
import {Country} from '../../../@core/model/country.model';
import {Address} from '../../../@core/model/address.model';
import {CreditCard} from '../../../@core/model/creditcard.model';
import {selector} from 'rxjs/operator/publish';
import {CreditCardType} from '../../../@core/model/creditcard-type.model';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  customer: Customer;
  user: User;
  submitted: boolean = false;
  returnUrl: string;
  selected = 1;

  constructor(private route: ActivatedRoute,
              private customerService: CustomerService,
              private router: Router) { }

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.user = new User();
    this.customer = new Customer();
    this.customer.address = new Address();
    this.customer.creditCard = new CreditCard();
  }

  register() {
    this.submitted = true;
    this.customerService
      .register(this.customer, this.user.password)
      .subscribe(
        result => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.submitted = false;
        },
      );
  }
  showTab(tab: number) {
    this.selected = tab;
  }
}
