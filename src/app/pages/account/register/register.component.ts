import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomerService} from '../../../@core/services/customer.service';
import {Customer} from '../../../@core/model/customer.model';
import {User} from '../../../@core/model/user.model';
import {Address} from '../../../@core/model/address.model';
import {CreditCard} from '../../../@core/model/creditcard.model';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, OnDestroy {
  destroy$ = new Subject<void>();
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

  ngOnDestroy() {
    this.destroy$.next();
  }

  doRegister() {
    this.submitted = true;
    this.customerService
      .register(this.customer, this.user.password)
      .takeUntil(this.destroy$)
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
