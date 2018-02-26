import { Component, OnDestroy } from '@angular/core';

import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/delay';
import {BodyOutputType, Toast, ToasterConfig, ToasterService} from 'angular2-toaster';
import 'style-loader!angular2-toaster/toaster.css';
import {NotificationService} from '../../@core/services/notification.service';

@Component({
  selector: 'ngx-layout',
  styleUrls: ['./layout.scss'],
  template: `
    <nb-layout [center]="layout.id === 'center-column'" windowMode>
      <nb-layout-header fixed>
        <ngx-header></ngx-header>
      </nb-layout-header>

      <nb-layout-column class="main-content">
        <toaster-container [toasterconfig]="config"></toaster-container>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-footer fixed>
        <ngx-footer></ngx-footer>
      </nb-layout-footer>
    </nb-layout>
  `,
})
export class LayoutComponent implements OnDestroy {
  layout: any = {
    name: 'One Column',
    icon: 'nb-layout-default',
    id: 'one-column',
    selected: true,
  };

  protected notificate$: Subscription;

  constructor(private toasterService: ToasterService,
              private notificationService: NotificationService) {

   this.notificate$ = this.notificationService.getMessage().subscribe((notification) => {
      this.showToast(notification.type, notification.title, notification.text);
    });
  }

  config: ToasterConfig;

  position = 'toast-top-left';
  animationType = 'fade';
  timeout = 5000;
  toastsLimit = 5;
  type = 'default';

  isNewestOnTop = true;
  isHideOnClick = true;
  isDuplicatesPrevented = false;
  isCloseButton = true;

  private showToast(type: string, title: string, body: string) {
    this.config = new ToasterConfig({
      positionClass: this.position,
      timeout: this.timeout,
      newestOnTop: this.isNewestOnTop,
      tapToDismiss: this.isHideOnClick,
      preventDuplicates: this.isDuplicatesPrevented,
      animation: this.animationType,
      limit: this.toastsLimit,
    });
    const toast: Toast = {
      type: type,
      title: title,
      body: body,
      timeout: this.timeout,
      showCloseButton: this.isCloseButton,
      bodyOutputType: BodyOutputType.TrustedHtml,
    };
    this.toasterService.popAsync(toast);
  }

  ngOnDestroy() {
    this.notificate$.unsubscribe();
  }
}
