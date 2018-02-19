import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild} from '@angular/core';
import {AdDirective} from '../../../@theme/directives/ad.directive';
import {AdItem} from '../../../@core/model/ad-item.model';
import {AdService} from '../../../@core/services/ad.service';
import {Router} from '@angular/router';
import {NotificationService} from '../../../@core/services/notification.service';
import {CustomerService} from '../../../@core/services/customer.service';
import {ChangePasswordComponent} from '../change-password/change-password.component';

@Component({
  selector: 'ngx-edit-account-data',
  templateUrl: './edit-account-data.component.html',
  styleUrls: ['./edit-account-data.component.scss'],
})
export class EditAccountDataComponent implements OnInit {
  @ViewChild(AdDirective) adHost: AdDirective;
  adItem: AdItem;
  submitted: boolean = false;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private customerService: CustomerService,
              private notificationService: NotificationService,
              private adService: AdService,
              private router: Router) { }

  ngOnInit() {
    this.adService.currentAd.subscribe(
      item => {
        this.adItem = item;
     });

    this.loadComponent();
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
      this.navigateToOverview();
    }
  }

  update() {
    if (this.adItem.user != null) {
      this.updatePassword();
    } else {
      this.submitted = true;
      this.customerService
        .update(this.adItem.customer)
        .subscribe(
          result => {
            this.navigateToOverview();
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
      .subscribe(
        result => {
          this.navigateToOverview();
          this.notificationService.success('Password sucessfully changed', 'Update Password');
        },
        error => {
          this.submitted = false;
        },
      );
  }
  navigateToOverview() {
    this.router.navigate(['/account/overview']);
  }
}
