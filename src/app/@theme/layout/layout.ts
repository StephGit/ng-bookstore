import { Component, OnDestroy } from '@angular/core';
import {BodyOutputType, Toast, ToasterConfig, ToasterService} from 'angular2-toaster';
import 'style-loader!angular2-toaster/toaster.css';
import {NotificationService} from '../../@core/services/notification.service';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/delay';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'ngx-layout',
  styleUrls: ['./layout.scss'],
  templateUrl: './layout.html',
})
export class LayoutComponent implements OnDestroy {
  destroy$ = new Subject<void>();
  layout: any = {
    name: 'One Column',
    icon: 'nb-layout-default',
    id: 'one-column',
    selected: true,
  };

  constructor(private toasterService: ToasterService,
              private notificationService: NotificationService) {

   this.notificationService.getMessage().takeUntil(this.destroy$).subscribe((notification) => {
      this.showToast(notification.type, notification.title, notification.text);
    });
  }

  config: ToasterConfig;

  position = 'toast-top-left';
  animationType = 'fade';
  timeout = 3500;
  toastsLimit = 5;
  type = 'default';

  isNewestOnTop = true;
  isHideOnClick = true;
  isDuplicatesPrevented = false;
  isCloseButton = true;

  types: string[] = ['default', 'info', 'success', 'warning', 'error'];
  animations: string[] = ['fade', 'flyLeft', 'flyRight', 'slideDown', 'slideUp'];
  positions: string[] = ['toast-top-full-width', 'toast-bottom-full-width', 'toast-top-left', 'toast-top-center',
    'toast-top-right', 'toast-bottom-right', 'toast-bottom-center', 'toast-bottom-left', 'toast-center'];


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
    this.destroy$.next();
  }
}
