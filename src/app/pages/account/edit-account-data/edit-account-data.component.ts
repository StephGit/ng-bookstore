import {Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AdDirective} from '../../../@theme/directives/ad.directive';
import {AdItem} from '../../../@core/model/ad-item.model';
import {AdService} from '../../../@core/services/ad.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NotificationService} from '../../../@core/services/notification.service';
import {CustomerService} from '../../../@core/services/customer.service';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import {Customer} from "../../../@core/model/customer.model";
import {User} from "../../../@core/model/user.model";

@Component({
  selector: 'ngx-edit-account-data',
  templateUrl: './edit-account-data.component.html',
})
export class EditAccountDataComponent implements OnInit, OnDestroy {
  @ViewChild(AdDirective) adHost: AdDirective;
  customer: Customer;
  user: User;
  adItem: AdItem;
  destroy$ = new Subject<void>();
  submitted: boolean = false;
  returnUrl: string;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private customerService: CustomerService,
              private notificationService: NotificationService,
              private adService: AdService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.adService.currentAd$.takeUntil(this.destroy$).subscribe(
      item => {
        this.adItem = item;
     });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.loadComponent();
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  private loadComponent() {
    if (this.adItem.component !== undefined && this.adItem.component !== null) {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.adItem.component);
      this.user = { ...this.adItem.user };
      this.customer = { ...this.adItem.customer };

      const viewContainerRef = this.adHost.viewContainerRef;
      viewContainerRef.clear();

      const componentRef = viewContainerRef.createComponent(componentFactory);
      (componentRef.instance).user = this.user;
      (componentRef.instance).customer = this.customer;
    } else {
      this.navigateBack();
    }
  }

  update() {
    if (this.user != null && this.user.confirmPassword !== undefined) {
      this.updatePassword();
    } else {
      this.submitted = true;
      this.customerService
        .update(this.customer)
        .takeUntil(this.destroy$)
        .subscribe(
          result => {
            this.customerService.find(this.customer.nr);
            this.navigateBack();
            this.notificationService.success(this.adItem.title + ' sucessfully changed', 'Update ' + this.adItem.title);
          },
          error => {
            this.submitted = false;
          },
        );
    }
  }

  updatePassword() {
    this.customerService
      .changePassword(this.user)
      .takeUntil(this.destroy$)
      .subscribe(
        result => {
          this.navigateBack();
          this.notificationService.success('Password sucessfully changed', 'Update Password');
        },
        error => {
          this.submitted = false;
        },
      );
  }

  navigateBack() {
    this.router.navigate([this.returnUrl]);
  }
}
