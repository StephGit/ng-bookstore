import {Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AdDirective} from '../../../@theme/directives/ad.directive';
import {AdItem} from '../../../@core/model/ad-item.model';
import {AdService} from '../../../@core/services/ad.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NotificationService} from '../../../@core/services/notification.service';
import {CustomerService} from '../../../@core/services/customer.service';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';


@Component({
  selector: 'ngx-edit-account-data',
  templateUrl: './edit-account-data.component.html',
})
export class EditAccountDataComponent implements OnInit, OnDestroy {
  @ViewChild(AdDirective) adHost: AdDirective;
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

      const viewContainerRef = this.adHost.viewContainerRef;
      viewContainerRef.clear();

      const componentRef = viewContainerRef.createComponent(componentFactory);
      (componentRef.instance).user = this.adItem.user;
      (componentRef.instance).customer = this.adItem.customer;
    } else {
      this.navigateBack(false);
    }
  }

  update() {
    if (this.adItem.user != null && this.adItem.user.confirmPassword !== undefined) {
      this.updatePassword();
    } else {
      this.submitted = true;
      this.customerService
        .update(this.adItem.customer)
        .takeUntil(this.destroy$)
        .subscribe(
          result => {
            this.navigateBack(false);
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
      .changePassword(this.adItem.user)
      .takeUntil(this.destroy$)
      .subscribe(
        result => {
          this.navigateBack(false);
          this.notificationService.success('Password sucessfully changed', 'Update Password');
        },
        error => {
          this.submitted = false;
        },
      );
  }

  navigateBack(canceled: boolean) {
    if (canceled) {
      this.customerService.find(this.adItem.customer.nr).subscribe(result => result);
    }
    this.router.navigate([this.returnUrl]);
  }
}
