import {Component, OnDestroy, OnInit} from '@angular/core';
import {Customer} from '../../../@core/model/customer.model';
import {CustomerService} from '../../../@core/services/customer.service';
import {CurrentUserService} from '../../../@core/services/current-user.service';
import {User} from '../../../@core/model/user.model';
import {Router} from '@angular/router';
import {NotificationService} from '../../../@core/services/notification.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'ngx-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit, OnDestroy {

  private customer: Customer;
  private user: User;
  private loading: boolean = true;

  private currentUser$: Subscription;
  private currentCustomer$: Subscription;
  private findCustomer$: Subscription;

  constructor(private customerService: CustomerService,
              private currentUserService: CurrentUserService,
              private notificationService: NotificationService,
              private router: Router) { }

  ngOnInit() {

    this.currentUser$ = this.currentUserService.currentUser
      .subscribe(user => {
        this.user = user;
      });

    this.currentCustomer$ = this.customerService.currentCustomer
      .subscribe(customer => {
        this.customer = customer;
      });


    this.findCustomer$ = this.customerService.find(this.user.id)
      .subscribe(
        result => {
          this.loading = false;
        },
        error => {
          this.notificationService.error(
            'There is a problem with your account. Please login again!', 'Account error');
          this.router.navigate(['/account/logout']);
        },
      );

  }

  ngOnDestroy(): void {
     this.currentCustomer$.unsubscribe();
     this.currentUser$.unsubscribe();
     this.findCustomer$.unsubscribe();
  }

}
