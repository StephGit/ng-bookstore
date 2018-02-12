import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomerService} from '../../../@core/data/services/customer.service';
import {Customer} from '../../../@core/data/model/customer.model';
import {User} from '../../../@core/data/model/user.model';
import {Country} from '../../../@core/data/model/country.model';
import {Address} from '../../../@core/data/model/address.model';
import {CreditCard} from '../../../@core/data/model/creditcard.model';
import {selector} from 'rxjs/operator/publish';

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
